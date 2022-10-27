const onClick = (el, func)=>{
    document.querySelector(el).addEventListener("click", func);
};
const convertXml2JSon = ()=>{
    const xml = document.getElementById("origin").value;
    const json = x2js.xml_str2json(origin);
    console.log(json);
};
document.addEventListener("DOMContentLoaded", ()=>{
    const x2js1 = new X2JS();
    onClick("#parse", ()=>{
        convertXml2JSon();
    });
});

//# sourceMappingURL=index.816e7b21.js.map
