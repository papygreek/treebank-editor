import X2JS from "./x2js.js"
import includeAtts from "./config.js"
import {prettifyXml, debounce} from "./utils.js"
const x2js = new X2JS()
let json = {}

const convertObjectsIntoArrays = (json) => {
    if (!(Array.isArray(json.treebank.sentence))) {
        json.treebank.sentence = [json.treebank.sentence]
    }    
    json.treebank.sentence.forEach((w, i) => {
        if (!(Array.isArray(w.word))) {
            json.treebank.sentence[i].word = [w.word]
        }
    })
    return json
}

const xmlToTable = (xml) => {
    
    try {
        json = x2js.xml2js(xml)
        json = convertObjectsIntoArrays(json)
    } catch {
        return `
            Could not parse the document. Make sure the XML has the following structure:<br><br>
            &lt;treebank&gt; <br>
            &nbsp;&nbsp;&lt;sentence&gt; <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;word [attributes] /&gt; <br>
            &nbsp;&nbsp;&nbsp;&nbsp;... <br>
            &nbsp;&nbsp;&lt;sentence&gt; <br>
            &nbsp;&nbsp;... <br>
            &lt;/treebank&gt;
        `
    }
    
    let atts = [...includeAtts]
    if (!atts.length) {
        atts = Object.keys(json.treebank.sentence[0].word[0]).map((key) => key.substring(1))
    }
    jsonToXml()
    return `
        <table>
            <tr class="th-row">
            ${atts.map((att) => {
                return `<th>${att}</th>`
            }).join('')}
            </tr>
            ${json.treebank.sentence.map((sentence, si) => {
                return `<tr><td class="sentence" colspan="${atts.length}"><h4>Sentence ${si+1}</h4></td></tr>` + sentence.word.map((word, wi) => {
                    return `
                        <tr>
                            ${atts.map((att) => {
                                wordAtt = '_'+att
                                return `
                                    <td data-original="${word[wordAtt]}" 
                                        data-si="${si}" data-wi="${wi}" 
                                        data-att="${wordAtt}" 
                                        contenteditable="true">
                                        ${word[wordAtt]}
                                    </td>`
                            }).join('')}
                        </tr>
                    `
                }).join('')
            }).join('')}
        </table>
    `
}

const updateJsonState = (el) => {
    json.treebank.sentence[el.dataset.si].word[el.dataset.wi][el.dataset.att] = el.innerText
    if (el.innerText != el.dataset.original) {
        el.classList.add('modified')
    } else {
        el.classList.remove('modified')
    }
    jsonToXml()
}

const jsonToXml = () => {
    const newXml = x2js.js2xml(json)
    const newXmlPrettified = prettifyXml(newXml)
    document.getElementById('target').value = newXmlPrettified
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('tokens')
    document.addEventListener('input', function (e) {
        if (e.target.matches('td')) {
            debounce(() =>
                updateJsonState(e.target)
            )()
        } else if (e.target.matches('#origin')) {
            debounce(() =>
                container.innerHTML = xmlToTable(e.target.value)
            )()
            
        }
    })
})