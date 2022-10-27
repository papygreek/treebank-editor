export const prettifyXml = (sourceXml) => {
    const xmlDoc = new DOMParser().parseFromString(sourceXml, 'application/xml');
    const xsltDoc = new DOMParser().parseFromString([
        '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
        '  <xsl:strip-space elements="*"/>',
        '  <xsl:template match="para[content-style][not(text())]">',
        '    <xsl:value-of select="normalize-space(.)"/>',
        '  </xsl:template>',
        '  <xsl:template match="node()|@*">',
        '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
        '  </xsl:template>',
        '  <xsl:output indent="yes"/>',
        '</xsl:stylesheet>',
    ].join('\n'), 'application/xml')

    const xsltProcessor = new XSLTProcessor()  
    xsltProcessor.importStylesheet(xsltDoc)
    const resultDoc = xsltProcessor.transformToDocument(xmlDoc)
    const resultXml = new XMLSerializer().serializeToString(resultDoc)
    return resultXml
}

export const debounce = (func, wait=300) => {
    let timeout

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        };

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}