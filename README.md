# A very simple editor for treebank XML files

### Command-line usage:

```
npm install
npm start
```

### Required XML structure

The tool expects the following XML structure (any additional elements will be ignored):

```
<treebank>
...
    <sentence>
        <word [attributes]>
        ...
    </sentence>
    ...
</treebank>
```

Each `<word>` must have the same set of attributes, but not necessarily in the same order.


### Optional configuration

The variable `includeAtts` in `src/config.js` can be used to choose (and order) the `<word>` attributes shown in the editor. If set to `[]` (default), all attributes are shown. 

