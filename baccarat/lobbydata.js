$(document).ready(function () {
    let data = [{ "data": "tpbb" }, { "data": "bppb" }, { "data": "pbbp" }, { "data": "bbbb" }, { "data": "pppp" }, { "data": "bptb" }, { "data": "pbbb" }, { "data": "bppb" }, { "data": "pbpp" }, { "data": "btpb" }, { "data": "tpbb" }, { "data": "bbpp" }, { "data": "pppb" }, { "data": "bbbb" }, { "data": "ppbb" }, { "data": "bbpp" }, { "data": "pppp" }, { "data": "bbbp" }, { "data": "bppp" }, { "data": "tptb" }, { "data": "pbpp" }, { "data": "tppb" }, { "data": "pbpb" }, { "data": "ppbp" }, { "data": "bbpp" }, { "data": "ppbb" }, { "data": "pbbp" }, { "data": "bpbb" }, { "data": "bbbp" }, { "data": "pppb" }, { "data": "pbpb" }, { "data": "ppbb" }, { "data": "bbbb" }, { "data": "pppb" }, { "data": "ppbb" }, { "data": "tpbb" }, { "data": "tppb" }, { "data": "pptp" }, { "data": "bptp" }, { "data": "pbbp" }, { "data": "tpbb" }, { "data": "ppbb" }, { "data": "ptbp" }, { "data": "tbbb" }, { "data": "bbtp" }, { "data": "pptb" }, { "data": "btpb" }, { "data": "bppp" }, { "data": "tbpb" }, { "data": "bbpp" }, { "data": "bppb" }, { "data": "pbtb" }, { "data": "btpb" }, { "data": "bpbp" }, { "data": "bpbp" }, { "data": "bbbb" }, { "data": "pppp" }, { "data": "pppb" }, { "data": "bbbp" }, { "data": "pbpp" }, { "data": "pbpb" }, { "data": "bpbb" }, { "data": "bbpp" }, { "data": "bbbb" }, { "data": "bbpp" }, { "data": "bbpp" }, { "data": "ppbb" }, { "data": "ppbb" }, { "data": "pppp" }, { "data": "bbpp" }, { "data": "tpbb" }, { "data": "tppp" }, { "data": "ppbp" }, { "data": "tppb" }, { "data": "ptpb" }, { "data": "bbpp" }, { "data": "pbtp" }, { "data": "bpbp" }, { "data": "ppbp" }, { "data": "bpbb" }, { "data": "pbbb" }, { "data": "pbbb" }, { "data": "bppb" }, { "data": "bbbb" }, { "data": "ppbb" }, { "data": "bbpb" }, { "data": "pbbp" }, { "data": "ppbb" }, { "data": "tbbp" }, { "data": "bppp" }, { "data": "bppb" }, { "data": "pptp" }, { "data": "pbpp" }, { "data": "pbpb" }, { "data": "ptpb" }, { "data": "bpbp" }, { "data": "bptb" }, { "data": "pttb" }, { "data": "bbbb" }, { "data": "ppbb" }, { "data": "bpbb" }, { "data": "ppbb" }, { "data": "pppb" }, { "data": "ppbb" }, { "data": "pbpp" }, { "data": "pbbb" }, { "data": "ppbb" }, { "data": "pppb" }, { "data": "pbpb" }, { "data": "pppp" }, { "data": "ppbp" }, { "data": "tpbb" }, { "data": "ptpb" }, { "data": "ptbb" }, { "data": "bbpp" }, { "data": "ttpb" }, { "data": "pbbp" }, { "data": "bbbb" }, { "data": "bbbp" }, { "data": "tbpp" }, { "data": "bbpb" }, { "data": "btpb" }, { "data": "bptp" }, { "data": "bpbp" }, { "data": "tpbb" }]

    if (sessionStorage.forType == undefined) {
        sessionStorage.forType = 1;
    }
    if (sessionStorage.forType == 1) {

        data = [{ "data": "tpbb" }, { "data": "bppb" }, { "data": "pbbp" }, { "data": "bbbb" }, { "data": "pppp" }, { "data": "bptb" }, { "data": "pbbb" }, { "data": "bppb" }, { "data": "pbpp" }, { "data": "btpb" }, { "data": "tpbb" }, { "data": "bbpp" }, { "data": "pppb" }, { "data": "bbbb" }, { "data": "ppbb" }, { "data": "bbpp" }, { "data": "pppp" }, { "data": "bbbp" }, { "data": "bppp" }, { "data": "tptb" }, { "data": "pbpp" }, { "data": "tppb" }, { "data": "pbpb" }, { "data": "ppbp" }, { "data": "bbpp" }, { "data": "ppbb" }, { "data": "pbbp" }, { "data": "bpbb" }, { "data": "bbbp" }, { "data": "pppb" }, { "data": "pbpb" }, { "data": "ppbb" }, { "data": "bbbb" }, { "data": "pppb" }, { "data": "ppbb" }, { "data": "tpbb" }, { "data": "tppb" }, { "data": "pptp" }, { "data": "bptp" }, { "data": "pbbp" }, { "data": "tpbb" }, { "data": "ppbb" }, { "data": "ptbp" }, { "data": "tbbb" }, { "data": "bbtp" }, { "data": "pptb" }, { "data": "btpb" }, { "data": "bppp" }, { "data": "tbpb" }, { "data": "bbpp" }, { "data": "bppb" }, { "data": "pbtb" }, { "data": "btpb" }, { "data": "bpbp" }, { "data": "bpbp" }, { "data": "bbbb" }, { "data": "pppp" }, { "data": "pppb" }, { "data": "bbbp" }, { "data": "pbpp" }, { "data": "pbpb" }, { "data": "bpbb" }, { "data": "bbpp" }, { "data": "bbbb" }, { "data": "bbpp" }, { "data": "bbpp" }, { "data": "ppbb" }, { "data": "ppbb" }, { "data": "pppp" }, { "data": "bbpp" }, { "data": "tpbb" }, { "data": "tppp" }, { "data": "ppbp" }, { "data": "tppb" }, { "data": "ptpb" }, { "data": "bbpp" }, { "data": "pbtp" }, { "data": "bpbp" }, { "data": "ppbp" }, { "data": "bpbb" }, { "data": "pbbb" }, { "data": "pbbb" }, { "data": "bppb" }, { "data": "bbbb" }, { "data": "ppbb" }, { "data": "bbpb" }, { "data": "pbbp" }, { "data": "ppbb" }, { "data": "tbbp" }, { "data": "bppp" }, { "data": "bppb" }, { "data": "pptp" }, { "data": "pbpp" }, { "data": "pbpb" }, { "data": "ptpb" }, { "data": "bpbp" }, { "data": "bptb" }, { "data": "pttb" }, { "data": "bbbb" }, { "data": "ppbb" }, { "data": "bpbb" }, { "data": "ppbb" }, { "data": "pppb" }, { "data": "ppbb" }, { "data": "pbpp" }, { "data": "pbbb" }, { "data": "ppbb" }, { "data": "pppb" }, { "data": "pbpb" }, { "data": "pppp" }, { "data": "ppbp" }, { "data": "tpbb" }, { "data": "ptpb" }, { "data": "ptbb" }, { "data": "bbpp" }, { "data": "ttpb" }, { "data": "pbbp" }, { "data": "bbbb" }, { "data": "bbbp" }, { "data": "tbpp" }, { "data": "bbpb" }, { "data": "btpb" }, { "data": "bptp" }, { "data": "bpbp" }, { "data": "tpbb" }]
    }
    if (sessionStorage.forType == 2) {

        data = [{ "data": "ptpbb" }, { "data": "pbppb" }, { "data": "ppbbp" }, { "data": "bbbbb" }, { "data": "ppppp" }, { "data": "bbptb" }, { "data": "ppbbb" }, { "data": "pbppb" }, { "data": "ppbpp" }, { "data": "pbtpb" }, { "data": "ptpbb" }, { "data": "pbbpp" }, { "data": "ppppb" }, { "data": "pbbbb" }, { "data": "pppbb" }, { "data": "bbbpp" }, { "data": "bpppp" }, { "data": "bbbbp" }, { "data": "tbppp" }, { "data": "ptptb" }, { "data": "tpbpp" }, { "data": "btppb" }, { "data": "bpbpb" }, { "data": "bppbp" }, { "data": "pbbpp" }, { "data": "bppbb" }, { "data": "ppbbp" }, { "data": "pbpbb" }, { "data": "bbbbp" }, { "data": "ppppb" }, { "data": "bpbpb" }, { "data": "bppbb" }, { "data": "pbbbb" }, { "data": "bpppb" }, { "data": "pppbb" }, { "data": "ptpbb" }, { "data": "btppb" }, { "data": "bpptp" }, { "data": "bbptp" }, { "data": "bpbbp" }, { "data": "ttpbb" }, { "data": "tppbb" }, { "data": "bptbp" }, { "data": "ttbbb" }, { "data": "bbbtp" }, { "data": "ppptb" }, { "data": "pbtpb" }, { "data": "pbppp" }, { "data": "ptbpb" }, { "data": "bbbpp" }, { "data": "pbppb" }, { "data": "bpbtb" }, { "data": "pbtpb" }, { "data": "pbpbp" }, { "data": "pbpbp" }, { "data": "bbbbb" }, { "data": "ppppp" }, { "data": "ppppb" }, { "data": "bbbbp" }, { "data": "bpbpp" }, { "data": "bpbpb" }, { "data": "bbpbb" }, { "data": "bbbpp" }, { "data": "pbbbb" }, { "data": "pbbpp" }, { "data": "bbbpp" }, { "data": "pppbb" }, { "data": "bppbb" }, { "data": "bpppp" }, { "data": "pbbpp" }, { "data": "ptpbb" }, { "data": "ptppp" }, { "data": "tppbp" }, { "data": "ptppb" }, { "data": "bptpb" }, { "data": "bbbpp" }, { "data": "tpbtp" }, { "data": "pbpbp" }, { "data": "bppbp" }, { "data": "bbpbb" }, { "data": "bpbbb" }, { "data": "tpbbb" }, { "data": "bbppb" }, { "data": "pbbbb" }, { "data": "pppbb" }, { "data": "pbbpb" }, { "data": "ppbbp" }, { "data": "bppbb" }, { "data": "ttbbp" }, { "data": "bbppp" }, { "data": "pbppb" }, { "data": "bpptp" }, { "data": "bpbpp" }, { "data": "bpbpb" }, { "data": "bptpb" }, { "data": "tbpbp" }, { "data": "pbptb" }, { "data": "bpttb" }, { "data": "pbbbb" }, { "data": "pppbb" }, { "data": "pbpbb" }, { "data": "bppbb" }, { "data": "ppppb" }, { "data": "tppbb" }, { "data": "ppbpp" }, { "data": "bpbbb" }, { "data": "bppbb" }, { "data": "bpppb" }, { "data": "bpbpb" }, { "data": "ppppp" }, { "data": "tppbp" }, { "data": "ptpbb" }, { "data": "bptpb" }, { "data": "bptbb" }, { "data": "pbbpp" }, { "data": "bttpb" }, { "data": "bpbbp" }, { "data": "bbbbb" }, { "data": "pbbbp" }, { "data": "ptbpp" }, { "data": "bbbpb" }, { "data": "pbtpb" }, { "data": "pbptp" }, { "data": "tbpbp" }, { "data": "ptpbb" }, { "data": "ptttpp" }, { "data": "pbtttb" }]
    }
    if (sessionStorage.forType == 3) {

        data = [{ "data": "pbptpbb" }, { "data": "pbpbppb" }, { "data": "pbppbbp" }, { "data": "pbbbbbb" }, { "data": "ppppppp" }, { "data": "pbbbptb" }, { "data": "pbppbbb" }, { "data": "pppbppb" }, { "data": "ppppbpp" }, { "data": "pbpbtpb" }, { "data": "pbptpbb" }, { "data": "ptpbbpp" }, { "data": "pbppppb" }, { "data": "pbpbbbb" }, { "data": "pbpppbb" }, { "data": "ppbbbpp" }, { "data": "pbbpppp" }, { "data": "ppbbbbp" }, { "data": "pptbppp" }, { "data": "pbptptb" }, { "data": "pptpbpp" }, { "data": "ppbtppb" }, { "data": "ppbpbpb" }, { "data": "ppbppbp" }, { "data": "pppbbpp" }, { "data": "pbbppbb" }, { "data": "ppppbbp" }, { "data": "pbpbpbb" }, { "data": "pbbbbbp" }, { "data": "ppppppb" }, { "data": "ppbpbpb" }, { "data": "pbbppbb" }, { "data": "pppbbbb" }, { "data": "ppbpppb" }, { "data": "pppppbb" }, { "data": "ppptpbb" }, { "data": "ppbtppb" }, { "data": "pbbpptp" }, { "data": "pbbbptp" }, { "data": "pbbpbbp" }, { "data": "ptttpbb" }, { "data": "pptppbb" }, { "data": "ppbptbp" }, { "data": "ppttbbb" }, { "data": "pbbbbtp" }, { "data": "ppppptb" }, { "data": "pppbtpb" }, { "data": "ptpbppp" }, { "data": "pbptbpb" }, { "data": "ppbbbpp" }, { "data": "pbpbppb" }, { "data": "ppbpbtb" }, { "data": "pbpbtpb" }, { "data": "pppbpbp" }, { "data": "pbpbpbp" }, { "data": "pbbbbbb" }, { "data": "ppppppp" }, { "data": "ptppppb" }, { "data": "ptbbbbp" }, { "data": "ppbpbpp" }, { "data": "pbbpbpb" }, { "data": "ppbbpbb" }, { "data": "ppbbbpp" }, { "data": "pbpbbbb" }, { "data": "pbpbbpp" }, { "data": "pbbbbpp" }, { "data": "pppppbb" }, { "data": "pbbppbb" }, { "data": "pbbpppp" }, { "data": "pppbbpp" }, { "data": "pbptpbb" }, { "data": "pbptppp" }, { "data": "pbtppbp" }, { "data": "ppptppb" }, { "data": "ppbptpb" }, { "data": "pbbbbpp" }, { "data": "pptpbtp" }, { "data": "pbpbpbp" }, { "data": "pbbppbp" }, { "data": "pbbbpbb" }, { "data": "ppbpbbb" }, { "data": "pbtpbbb" }, { "data": "ppbbppb" }, { "data": "pbpbbbb" }, { "data": "pppppbb" }, { "data": "pppbbpb" }, { "data": "pbppbbp" }, { "data": "ppbppbb" }, { "data": "ppttbbp" }, { "data": "pbbbppp" }, { "data": "pbpbppb" }, { "data": "pbbpptp" }, { "data": "ppbpbpp" }, { "data": "pbbpbpb" }, { "data": "ppbptpb" }, { "data": "pptbpbp" }, { "data": "pbpbptb" }, { "data": "ppbpttb" }, { "data": "ptpbbbb" }, { "data": "pbpppbb" }, { "data": "pbpbpbb" }, { "data": "pbbppbb" }, { "data": "ppppppb" }, { "data": "pptppbb" }, { "data": "ppppbpp" }, { "data": "ppbpbbb" }, { "data": "ppbppbb" }, { "data": "ppbpppb" }, { "data": "pbbpbpb" }, { "data": "pbppppp" }, { "data": "pttppbp" }, { "data": "ptptpbb" }, { "data": "ppbptpb" }, { "data": "ppbptbb" }, { "data": "pbpbbpp" }, { "data": "ppbttpb" }, { "data": "pbbpbbp" }, { "data": "pbbbbbb" }, { "data": "pppbbbp" }, { "data": "pbptbpp" }, { "data": "ppbbbpb" }, { "data": "pbpbtpb" }, { "data": "ptpbptp" }, { "data": "pptbpbp" }, { "data": "pbptpbb" }]
    }
    if (sessionStorage.forType == 4) {

        data = [{ "data": "bpppbb" }, { "data": "bppppb" }, { "data": "bppbbp" }, { "data": "bbpbbb" }, { "data": "pppppp" }, { "data": "bbpptb" }, { "data": "bppbbb" }, { "data": "pppppb" }, { "data": "pppbpp" }, { "data": "bpptpb" }, { "data": "bpppbb" }, { "data": "tppbpp" }, { "data": "bppppb" }, { "data": "bppbbb" }, { "data": "bpppbb" }, { "data": "pbpbpp" }, { "data": "bbpppp" }, { "data": "pbpbbp" }, { "data": "ptpppp" }, { "data": "bppptb" }, { "data": "ptpbpp" }, { "data": "pbpppb" }, { "data": "pbpbpb" }, { "data": "pbppbp" }, { "data": "pppbpp" }, { "data": "bbppbb" }, { "data": "pppbbp" }, { "data": "bpppbb" }, { "data": "bbpbbp" }, { "data": "pppppb" }, { "data": "pbpbpb" }, { "data": "bbppbb" }, { "data": "pppbbb" }, { "data": "pbpppb" }, { "data": "ppppbb" }, { "data": "ppppbb" }, { "data": "pbpppb" }, { "data": "bbpptp" }, { "data": "bbpptp" }, { "data": "bbpbbp" }, { "data": "ttppbb" }, { "data": "ptppbb" }, { "data": "pbptbp" }, { "data": "ptpbbb" }, { "data": "bbpbtp" }, { "data": "pppptb" }, { "data": "ppptpb" }, { "data": "tppppp" }, { "data": "bppbpb" }, { "data": "pbpbpp" }, { "data": "bppppb" }, { "data": "pbpbtb" }, { "data": "bpptpb" }, { "data": "ppppbp" }, { "data": "bpppbp" }, { "data": "bbpbbb" }, { "data": "pppppp" }, { "data": "tppppb" }, { "data": "tbpbbp" }, { "data": "pbpbpp" }, { "data": "bbpbpb" }, { "data": "pbppbb" }, { "data": "pbpbpp" }, { "data": "bppbbb" }, { "data": "bppbpp" }, { "data": "bbpbpp" }, { "data": "ppppbb" }, { "data": "bbppbb" }, { "data": "bbpppp" }, { "data": "pppbpp" }, { "data": "bpppbb" }, { "data": "bppppp" }, { "data": "btppbp" }, { "data": "pppppb" }, { "data": "pbptpb" }, { "data": "bbpbpp" }, { "data": "ptpbtp" }, { "data": "bpppbp" }, { "data": "bbppbp" }, { "data": "bbppbb" }, { "data": "pbpbbb" }, { "data": "btpbbb" }, { "data": "pbpppb" }, { "data": "bppbbb" }, { "data": "ppppbb" }, { "data": "pppbpb" }, { "data": "bppbbp" }, { "data": "pbppbb" }, { "data": "ptpbbp" }, { "data": "bbpppp" }, { "data": "bppppb" }, { "data": "bbpptp" }, { "data": "pbpbpp" }, { "data": "bbpbpb" }, { "data": "pbptpb" }, { "data": "ptppbp" }, { "data": "bppptb" }, { "data": "pbpttb" }, { "data": "tppbbb" }, { "data": "bpppbb" }, { "data": "bpppbb" }, { "data": "bbppbb" }, { "data": "pppppb" }, { "data": "ptppbb" }, { "data": "pppbpp" }, { "data": "pbpbbb" }, { "data": "pbppbb" }, { "data": "pbpppb" }, { "data": "bbpbpb" }, { "data": "bppppp" }, { "data": "ttppbp" }, { "data": "tpppbb" }, { "data": "pbptpb" }, { "data": "pbptbb" }, { "data": "bppbpp" }, { "data": "pbptpb" }, { "data": "bbpbbp" }, { "data": "bbpbbb" }, { "data": "pppbbp" }, { "data": "bppbpp" }, { "data": "pbpbpb" }, { "data": "bpptpb" }, { "data": "tppptp" }, { "data": "ptppbp" }, { "data": "bpppbb" }]
    }
    if (sessionStorage.forType == 5) {

        data = [{ "data": "bbpppp" }, { "data": "pbbbpp" }, { "data": "ptbppp" }, { "data": "bptppb" }, { "data": "ptpbpp" }, { "data": "pbtppb" }, { "data": "pbpbpb" }, { "data": "pbpppp" }, { "data": "ppbbpp" }, { "data": "bbpppb" }, { "data": "pppbpp" }, { "data": "bpbppb" }, { "data": "bbbbpp" }, { "data": "pppppb" }, { "data": "pbpbpb" }, { "data": "bbpppb" }, { "data": "ppbbpb" }, { "data": "pbpppb" }, { "data": "pppppb" }, { "data": "pptppb" }, { "data": "pbtppb" }, { "data": "bbpppp" }, { "data": "bbbppp" }, { "data": "bbpbpp" }, { "data": "tttppb" }, { "data": "ptpppb" }, { "data": "pbptpp" }, { "data": "pttbpb" }, { "data": "bbbbpp" }, { "data": "pppppb" }, { "data": "ppbtpb" }, { "data": "tpbppp" }, { "data": "bptbpb" }, { "data": "pbbbpp" }, { "data": "bpbppb" }, { "data": "pbpbpb" }, { "data": "bpbtpb" }, { "data": "ppbppp" }, { "data": "bpbppp" }, { "data": "bbbbpb" }, { "data": "pppppp" }, { "data": "tppppb" }, { "data": "tbbbpp" }, { "data": "pbpbpp" }, { "data": "bbpbpb" }, { "data": "pbbppb" }, { "data": "pbbbpp" }, { "data": "bpbbpb" }, { "data": "bpbbpp" }, { "data": "bbbbpp" }, { "data": "pppppb" }, { "data": "bbpppb" }, { "data": "bbpppp" }, { "data": "ppbbpp" }, { "data": "bptppb" }, { "data": "bptppp" }, { "data": "btpppp" }, { "data": "pptppb" }, { "data": "pbptpb" }, { "data": "bbbbpp" }, { "data": "ptpbpp" }, { "data": "bpbppp" }, { "data": "bbpppp" }, { "data": "bbbppb" }, { "data": "pbpbpb" }, { "data": "btpbpb" }, { "data": "pbbppb" }, { "data": "bpbbpb" }, { "data": "pppppb" }, { "data": "ppbbpb" }, { "data": "bppbpp" }, { "data": "pbpppb" }, { "data": "pttbpp" }, { "data": "bbbppp" }, { "data": "bpbppb" }, { "data": "bbpppp" }, { "data": "pbpbpp" }, { "data": "bbpbpb" }, { "data": "pbptpb" }, { "data": "ptbppp" }, { "data": "bpbppb" }, { "data": "pbptpb" }, { "data": "tpbbpb" }, { "data": "bppppb" }, { "data": "bpbppb" }, { "data": "bbpppb" }, { "data": "pppppb" }, { "data": "ptpppb" }, { "data": "pppbpp" }, { "data": "pbpbpb" }, { "data": "pbpppb" }, { "data": "pbpppb" }, { "data": "bbpbpb" }, { "data": "bppppp" }, { "data": "ttpppp" }, { "data": "tptppb" }, { "data": "pbptpb" }, { "data": "pbptpb" }, { "data": "bpbbpp" }, { "data": "pbttpb" }, { "data": "bbpbpp" }, { "data": "bbbbpb" }, { "data": "ppbbpp" }, { "data": "bptbpp" }, { "data": "pbbbpb" }, { "data": "bpbtpb" }, { "data": "tpbppp" }, { "data": "ptbppp" }, { "data": "bptppb" }]
    }
    if (sessionStorage.forType == 6) {

        data = [{ "data": "ptbpbp" }, { "data": "bptpbb" }, { "data": "bptpbp" }, { "data": "bptpbb" }, { "data": "bpbppb" }, { "data": "bppbbp" }, { "data": "bbbbbb" }, { "data": "pppppp" }, { "data": "bbbptb" }, { "data": "bppbbb" }, { "data": "ppbppb" }, { "data": "pppbpp" }, { "data": "bpbtpb" }, { "data": "bptpbb" }, { "data": "tpbbpp" }, { "data": "bppppb" }, { "data": "bpbbbb" }, { "data": "bpppbb" }, { "data": "pbbbpp" }, { "data": "bbpppp" }, { "data": "pbbbbp" }, { "data": "ptbppp" }, { "data": "bptptb" }, { "data": "ptpbpp" }, { "data": "pbtppb" }, { "data": "pbpbpb" }, { "data": "pbppbp" }, { "data": "ppbbpp" }, { "data": "bbppbb" }, { "data": "pppbbp" }, { "data": "bpbpbb" }, { "data": "bbbbbp" }, { "data": "pppppb" }, { "data": "pbpbpb" }, { "data": "bbppbb" }, { "data": "ppbbbb" }, { "data": "pbpppb" }, { "data": "ppppbb" }, { "data": "pptpbb" }, { "data": "pbtppb" }, { "data": "bbpptp" }, { "data": "bbbptp" }, { "data": "bbpbbp" }, { "data": "tttpbb" }, { "data": "ptppbb" }, { "data": "pbptbp" }, { "data": "pttbbb" }, { "data": "bbbbtp" }, { "data": "pppptb" }, { "data": "ppbtpb" }, { "data": "tpbppp" }, { "data": "bptbpb" }, { "data": "pbbbpp" }, { "data": "bpbppb" }, { "data": "pbpbtb" }, { "data": "bpbtpb" }, { "data": "ppbpbp" }, { "data": "bpbpbp" }, { "data": "bbbbbb" }, { "data": "pppppp" }, { "data": "tppppb" }, { "data": "tbbbbp" }, { "data": "pbpbpp" }, { "data": "bbpbpb" }, { "data": "pbbpbb" }, { "data": "pbbbpp" }, { "data": "bpbbbb" }, { "data": "bpbbpp" }, { "data": "bbbbpp" }, { "data": "ppppbb" }, { "data": "bbppbb" }, { "data": "bbpppp" }, { "data": "ppbbpp" }, { "data": "bptpbb" }, { "data": "bptppp" }, { "data": "btppbp" }, { "data": "pptppb" }, { "data": "pbptpb" }, { "data": "bbbbpp" }, { "data": "ptpbtp" }, { "data": "bpbpbp" }, { "data": "bbppbp" }, { "data": "bbbpbb" }, { "data": "pbpbbb" }, { "data": "btpbbb" }, { "data": "pbbppb" }, { "data": "bpbbbb" }, { "data": "ppppbb" }, { "data": "ppbbpb" }, { "data": "bppbbp" }, { "data": "pbppbb" }, { "data": "pttbbp" }, { "data": "bbbppp" }, { "data": "bpbppb" }, { "data": "bbpptp" }, { "data": "pbpbpp" }, { "data": "bbpbpb" }, { "data": "pbptpb" }, { "data": "ptbpbp" }, { "data": "bpbptb" }, { "data": "pbpttb" }, { "data": "tpbbbb" }, { "data": "bpppbb" }, { "data": "bpbpbb" }, { "data": "bbppbb" }, { "data": "pppppb" }, { "data": "ptppbb" }, { "data": "pppbpp" }, { "data": "pbpbbb" }, { "data": "pbppbb" }, { "data": "pbpppb" }, { "data": "bbpbpb" }, { "data": "bppppp" }, { "data": "ttppbp" }, { "data": "tptpbb" }, { "data": "pbptpb" }, { "data": "pbptbb" }, { "data": "bpbbpp" }, { "data": "pbttpb" }, { "data": "bbpbbp" }, { "data": "bbbbbb" }, { "data": "ppbbbp" }, { "data": "bptbpp" }, { "data": "pbbbpb" }, { "data": "bpbtpb" }, { "data": "tpbptp" }, { "data": "ptbpbp" }, { "data": "bptpbb" }]
    }
    if (sessionStorage.forType == 7) {

        data = [{ "data": "pptppb" }, { "data": "pbptpb" }, { "data": "bbbbpp" }, { "data": "ptpbtp" }, { "data": "bpbpbp" }, { "data": "bbppbp" }, { "data": "bbbpbb" }, { "data": "pbpbbb" }, { "data": "btpbbb" }, { "data": "pbbppb" }, { "data": "bpbbbb" }, { "data": "ppppbb" }, { "data": "ppbbpb" }, { "data": "bppbbp" }, { "data": "pbppbb" }, { "data": "pttbbp" }, { "data": "bbbppp" }, { "data": "bpbppb" }, { "data": "bbpptp" }, { "data": "pbpbpp" }, { "data": "bbpbpb" }, { "data": "pbptpb" }, { "data": "ptbpbp" }, { "data": "bpbptb" }, { "data": "pbpttb" }, { "data": "tpbbbb" }, { "data": "bpppbb" }, { "data": "bpbpbb" }, { "data": "bbppbb" }, { "data": "pppppb" }, { "data": "ptppbb" }, { "data": "pppbpp" }, { "data": "pbpbbb" }, { "data": "pbppbb" }, { "data": "pbpppb" }, { "data": "bbpbpb" }, { "data": "bppppp" }, { "data": "ttppbp" }, { "data": "tptpbb" }, { "data": "pbptpb" }, { "data": "pbptbb" }, { "data": "bpbbpp" }, { "data": "pbttpb" }, { "data": "bbpbbp" }, { "data": "bbbbbb" }, { "data": "ppbbbp" }, { "data": "bptbpp" }, { "data": "pbbbpb" }, { "data": "bpbtpb" }, { "data": "tpbptp" }, { "data": "ptbpbp" }, { "data": "bptpbb" }]
    }
    if (sessionStorage.forType == 8) {

        data = [{ "data": "bbpbpb" }, { "data": "pbptpb" }, { "data": "ptbpbp" }, { "data": "bpbptb" }, { "data": "pbpttb" }, { "data": "tpbbbb" }, { "data": "bpppbb" }, { "data": "bpbpbb" }, { "data": "bbppbb" }, { "data": "pppppb" }, { "data": "ptppbb" }, { "data": "pppbpp" }, { "data": "pbpbbb" }, { "data": "pbppbb" }, { "data": "pbpppb" }, { "data": "bbpbpb" }, { "data": "bppppp" }, { "data": "ttppbp" }, { "data": "tptpbb" }, { "data": "pbptpb" }, { "data": "pbptbb" }, { "data": "bpbbpp" }, { "data": "pbttpb" }, { "data": "bbpbbp" }, { "data": "bbbbbb" }, { "data": "ppbbbp" }, { "data": "bptbpp" }, { "data": "pbbbpb" }, { "data": "bpbtpb" }, { "data": "tpbptp" }, { "data": "ptbpbp" }, { "data": "bptpbb" }, { "data": "bptpbb" }, { "data": "bpbppb" }, { "data": "bppbbp" }, { "data": "bbbbbb" }, { "data": "pppppp" }, { "data": "bbbptb" }, { "data": "bppbbb" }, { "data": "ppbppb" }, { "data": "pppbpp" }, { "data": "bpbtpb" }, { "data": "bptpbb" }, { "data": "tpbbpp" }, { "data": "bppppb" }, { "data": "bpbbbb" }, { "data": "bpppbb" }, { "data": "pbbbpp" }, { "data": "bbpppp" }, { "data": "pbbbbp" }, { "data": "ptbppp" }, { "data": "bptptb" }, { "data": "ptpbpp" }, { "data": "pbtppb" }, { "data": "pbpbpb" }, { "data": "pbppbp" }, { "data": "ppbbpp" }, { "data": "bbppbb" }, { "data": "pppbbp" }, { "data": "bpbpbb" }, { "data": "bbbbbp" }, { "data": "pppppb" }]
    }
    if (sessionStorage.forType == 9) {

        data = [{ "data": "bpbtpb" }, { "data": "bptpbb" }, { "data": "tpbbpp" }, { "data": "bppppb" }, { "data": "bpbbbb" }, { "data": "bpppbb" }, { "data": "pbbbpp" }, { "data": "bbpppp" }, { "data": "pbbbbp" }, { "data": "ptbppp" }, { "data": "bptptb" }, { "data": "ptpbpp" }, { "data": "pbtppb" }, { "data": "pbpbpb" }, { "data": "pbppbp" }, { "data": "ppbbpp" }, { "data": "bbppbb" }, { "data": "pppbbp" }, { "data": "bpbpbb" }, { "data": "bbbbbp" }, { "data": "pppppb" }, { "data": "pbpbpb" }, { "data": "bbppbb" }, { "data": "ppbbbb" }, { "data": "pbpppb" }, { "data": "ppppbb" }, { "data": "pptpbb" }, { "data": "pbtppb" }, { "data": "bbpptp" }, { "data": "bbbptp" }, { "data": "bbpbbp" }, { "data": "tttpbb" }, { "data": "ppppbb" }, { "data": "ppbbpb" }, { "data": "bppbbp" }, { "data": "pbppbb" }, { "data": "pttbbp" }, { "data": "bbbppp" }, { "data": "bpbppb" }, { "data": "bbpptp" }, { "data": "pbpbpp" }, { "data": "bbpbpb" }, { "data": "pbptpb" }, { "data": "ptbpbp" }, { "data": "bpbptb" }, { "data": "pbpttb" }, { "data": "tpbbbb" }, { "data": "bpppbb" }, { "data": "bpbpbb" }, { "data": "bbppbb" }, { "data": "pppppb" }, { "data": "ptppbb" }, { "data": "pppbpp" }, { "data": "pbpbbb" }, { "data": "pbppbb" }, { "data": "pbpppb" }, { "data": "bbpbpb" }, { "data": "bppppp" }, { "data": "ttppbp" }, { "data": "tptpbb" }, { "data": "pbptpb" }, { "data": "pbptbb" }, { "data": "bpbbpp" }, { "data": "pbttpb" }, { "data": "bbpbbp" }, { "data": "bbbbbb" }, { "data": "ppbbbp" }, { "data": "bptbpp" }, { "data": "pbbbpb" }, { "data": "bpbtpb" }, { "data": "tpbptp" }, { "data": "ptbpbp" }, { "data": "bptpbb" }]
    }
    if (sessionStorage.forType == 10) {

        data = [{ "data": "tpbbpp" }, { "data": "bppppb" }, { "data": "bpbbbb" }, { "data": "bpppbb" }, { "data": "pbbbpp" }, { "data": "bbpppp" }, { "data": "pbbbbp" }, { "data": "ptbppp" }, { "data": "bptptb" }, { "data": "ptpbpp" }, { "data": "pbtppb" }, { "data": "pbpbpb" }, { "data": "pbppbp" }, { "data": "ppbbpp" }, { "data": "bbppbb" }, { "data": "pppbbp" }, { "data": "bpbpbb" }, { "data": "bbbbbp" }, { "data": "pppppb" }, { "data": "pbpbpb" }, { "data": "bbppbb" }, { "data": "ppbbbb" }, { "data": "pbpppb" }, { "data": "ppppbb" }, { "data": "pptpbb" }, { "data": "pbtppb" }, { "data": "bbpptp" }, { "data": "bbbptp" }, { "data": "bbpbbp" }, { "data": "tttpbb" }, { "data": "ptppbb" }, { "data": "pbptbp" }, { "data": "pttbbb" }, { "data": "bbbbtp" }, { "data": "pppptb" }, { "data": "ppbtpb" }, { "data": "tpbppp" }, { "data": "bptbpb" }, { "data": "pbbbpp" }, { "data": "bpbppb" }, { "data": "pbpbtb" }, { "data": "bpbtpb" }, { "data": "ppbpbp" }, { "data": "bpbpbp" }, { "data": "bbbbbb" }, { "data": "pppppp" }, { "data": "tppppb" }, { "data": "tbbbbp" }, { "data": "pbpbpp" }, { "data": "bbpbpb" }, { "data": "pbbpbb" }, { "data": "pbbbpp" }, { "data": "bpbbbb" }, { "data": "bpbbpp" }, { "data": "bbbbpp" }, { "data": "ppppbb" }, { "data": "bbppbb" }, { "data": "bbpppp" }, { "data": "ppbbpp" }, { "data": "bptpbb" }, { "data": "bptppp" }, { "data": "btppbp" }, { "data": "pptppb" }, { "data": "pbptpb" }, { "data": "bbbbpp" }, { "data": "ptpbtp" }, { "data": "bpbpbp" }, { "data": "bbppbp" }, { "data": "bbbpbb" }, { "data": "pbpbbb" }, { "data": "btpbbb" }, { "data": "pbbppb" }, { "data": "bpbbbb" }, { "data": "ppppbb" }, { "data": "ppbbpb" }, { "data": "bppbbp" }, { "data": "pbppbb" }, { "data": "pttbbp" }, { "data": "bbbppp" }, { "data": "bpbppb" }, { "data": "bbpptp" }, { "data": "pbpbpp" }, { "data": "bbpbpb" }, { "data": "pbptpb" }, { "data": "ptbpbp" }, { "data": "bpbptb" }, { "data": "pbpttb" }, { "data": "tpbbbb" }, { "data": "bpppbb" }, { "data": "bpbpbb" }, { "data": "bbppbb" }, { "data": "pppppb" }, { "data": "ptppbb" }, { "data": "pppbpp" }, { "data": "pbpbbb" }, { "data": "pbppbb" }, { "data": "pbpppb" }, { "data": "bbpbpb" }, { "data": "bppppp" }, { "data": "ttppbp" }, { "data": "tptpbb" }, { "data": "pbptpb" }, { "data": "pbptbb" }, { "data": "bpbbpp" }, { "data": "pbttpb" }, { "data": "bbpbbp" }]
    }
    var elements = document.getElementsByName('changol');
    for (var i = 0; i < elements.length; i++) {
        if (i === sessionStorage.forType - 1) {
            elements[i].style.color = 'khaki';
        } else {
            elements[i].style.color = 'white';
        }
    }
    let url = $("#room-url").val();
    // console.log()
    //sessionStorage.setItem('forType', 1);
    sessionStorage.setItem('formula', JSON.stringify(data));
    initialize();

    // $.ajax({
    //     type: "get",
    //     url: "https://hackcbt.herokuapp.com/get_formula_data",
    //     // headers: {
    //     //     "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
    //     //         "content"
    //     //     ),
    //     // },
    //     // timeout: 30000,
    //     // data: {
    //     //     url: url,
    //     // },
    //     beforeSend: function () {
    //         // Swal.fire({
    //         //     title: "Connecting...",
    //         //     allowOutsideClick: false,
    //         // });
    //         // swal.showLoading();
    //     },
    //     success: function (response) {
    //         console.log(response);
    //         let data = JSON.parse(response);
    //         console.log(data);
    //         // swal.close();
    //         sessionStorage.setItem('formula', JSON.stringify(data));

    //         initialize();
    //     },
    //     error: function (jqXHR, textStatus, errorThrown) {
    //         swal.close();
    //         console.log("Error");
    //         Swal.fire({
    //             type: "error",
    //             title: "Cannot Fetch Data",
    //             text: "Error while fetching data for lobby. Contact support",
    //         });
    //     },
    // });

    // setTimeout(function(){
    //     var x = JSON.parse(sessionStorage.getItem('formula'));
    //     // console.log("session storage: ", x);
    //     // sessionStorage.setItem('formula', JSON.stringify(data['data']));

    //     $('.navUser').html(`<img src="resourcehttps://www.hackbcr.com/images/new/user.png" style="height:30px;">&nbsp; ${sessionStorage.User} &nbsp; </span>`);
    //     $('.navCredit').html(`<img src="resourcehttps://www.hackbcr.com/images/new/credit.png" style="height:30px;">&nbsp; ${$.number(sessionStorage.Credit)} &nbsp; </span>`);
    //     let head = document.getElementsByTagName('HEAD')[0];
    //     let link = document.createElement('link');
    //     // console.log(sessionStorage.forType)
    //     var acc_interval = [];
    //     switch (sessionStorage.forType) {
    //         case "10":
    //             link.rel = 'stylesheet';
    //             link.type = 'text/css';
    //             link.href = 'css/lbtheme_pirate4.css';
    //             head.appendChild(link);
    //             $('body').css('background-image', 'url("https://www.hackbcr.com/images/theme/1/BG.png")');
    //             $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/topbar/Sidebar_sahacker.png")');
    //             break;
    //         case "2":
    //             link.rel = 'stylesheet';
    //             link.type = 'text/css';
    //             link.href = 'css/lbtheme_racing4.css';
    //             head.appendChild(link);
    //             $('body').css('background-image', 'url("https://www.hackbcr.com/images/theme/racing/01_Racing_BG.png")');
    //             $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/topbar/Sidebar_sahacker.png")');
    //             break;
    //         case "3":
    //             link.rel = 'stylesheet';
    //             link.type = 'text/css';
    //             link.href = 'css/lbtheme_space4.css';
    //             head.appendChild(link);
    //             $('body').css('background-image', 'url("https://www.hackbcr.com/images/theme/space/01_Space_BG.png")');
    //             $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/topbar/Sidebar_sahacker.png")');
    //             break;
    //         case "4":
    //             link.rel = 'stylesheet';
    //             link.type = 'text/css';
    //             link.href = 'css/lbtheme_winter4.css';
    //             head.appendChild(link);
    //             $('body').css('background-image', 'url("https://www.hackbcr.com/images/theme/winter/01_Winter_BG.png")');
    //             $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/topbar/Sidebar_sahacker.png")');
    //             break;
    //         case "5":
    //             link.rel = 'stylesheet';
    //             link.type = 'text/css';
    //             link.href = 'css/lbtheme_neon.css';
    //             head.appendChild(link);
    //             $('body').css('background-image', 'url("https://www.hackbcr.com/images/theme/neon/01_Neon_BG.png")');
    //             $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/theme/neon/02_Neon_Lobby_05_Sidebar.png")');
    //             break;
    //         case "6":
    //             link.rel = 'stylesheet';
    //             link.type = 'text/css';
    //             link.href = 'css/lbtheme_mayan4.css';
    //             head.appendChild(link);
    //             $('body').css('background-image', 'url("https://www.hackbcr.com/images/theme/mayan/01__Mayan_BG.png")');
    //             $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/topbar/Sidebar_sahacker.png")');
    //             break;
    //         case "7":
    //             link.rel = 'stylesheet';
    //             link.type = 'text/css';
    //             link.href = 'css/lbtheme_china.css';
    //             head.appendChild(link);
    //             $('body').css('background-image', 'url("https://www.hackbcr.com/images/theme/china/01_China_BG.png")');
    //             $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/topbar/Sidebar_sahacker.png")');
    //             break;
    //         case "8":
    //             link.rel = 'stylesheet';
    //             link.type = 'text/css';
    //             link.href = 'css/lbtheme_music.css';
    //             head.appendChild(link);
    //             $('body').css('background-image', 'url("https://www.hackbcr.com/images/theme/music/01_Music_BG.png")');
    //             $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/topbar/Sidebar_sahacker.png")');
    //             break;
    //         case "9":
    //             link.rel = 'stylesheet';
    //             link.type = 'text/css';
    //             link.href = 'css/lbtheme_skull.css';
    //             head.appendChild(link);
    //             $('body').css('background-image', 'url("https://www.hackbcr.com/images/theme/skull/01_Skull_BG.png")');
    //             $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/topbar/Sidebar_sahacker.png")');
    //             break;
    //         case "1":
    //             var asset_path = "asset/" + 1;
    //             $('body').css('background-image', 'url(' + "https://www.hackbcr.com/images/new/" + asset_path + "/BG.png" + ')');
    //             $('.sidenav').css('background-image', 'url(' + "https://www.hackbcr.com/images/new/" + asset_path + "/side_bar.png" + ')');
    //             $('.resroom').css('background-image', 'url(' + "https://www.hackbcr.com/images/new/" + asset_path + "/Frame_Lobby.png" + ')');
    //     }


    //     function chkresult(s) {
    //         // console.log(predict);

    //         if (predict == s) {
    //             win++;
    //             rate = Math.round((win / active) * 100);
    //             winid = 'winrate' + room;
    //             winhtml = rate + '%';
    //             if (rate > 80) {
    //                 getCase("num", rate, room)
    //             }
    //             else if (rate > 60) {
    //                 getCase("num", rate, room)
    //             }
    //             else {
    //                 getCase("num", rate, room)
    //             }
    //             stack = 1;
    //         }
    //         else if (predict != "") {
    //             let winid = 'winrate' + room;

    //             if (active > 0) {
    //                 if (stack < 3) {
    //                     active--;
    //                     stack++;
    //                     // winhtml = 'Waiting for results';
    //                     // getCase("text", winhtml, room);
    //                 }
    //                 else {
    //                     rate = Math.round((win / active) * 100);
    //                     winhtml = rate + '%';
    //                     if (rate > 80) {
    //                         getCase("num", rate, room)
    //                     }
    //                     else if (rate > 60) {
    //                         getCase("num", rate, room)
    //                     }
    //                     else {
    //                         getCase("num", rate, room)
    //                     }
    //                     stack = 1;
    //                 }
    //             }
    //             else {
    //                 winhtml = 'Shuffling';
    //                 getCase("text", winhtml, room);
    //             }
    //         }
    //         if (slot.length == x[0].data.length - 1) slot = slot.substring(1, x[0].data.length - 1);
    //         slot += s;
    //         for (let i = 0; i < x.length; i++) {
    //             if (slot == x[i].data.substring(0, x[i].data.length - 1)) {
    //                 active++;
    //                 predict = x[i].data.charAt(x[i].data.length - 1);
    //                 break;
    //             }
    //             predict = "";
    //         }
    //     }

    //     function roomdata(formula) {
    //     //  console.log('ROOMDATA');
    //         // sessionStorage.setItem('formula', JSON.stringify(formula));
    //         // console.log(formula);
    //         for (room = 0; room < formula.length ; room++) {

    //             res = formula[room].split("");
    //             //console.log(room +" : "+ res[0]);

    //             if (typeof res[0] == 'undefined') {
    //                 let winhtml = 'Shuffling';
    //                 getCase("text", winhtml, room);
    //             }
    //             else if (res[0] != '') {
    //                 active = 0;
    //                 win = 0;
    //                 slot = "";
    //                 stack = 1;
    //                 predict = "";
    //                 for (let i = 0; i < 72; i++) {

    //                     if (res[i] == 'B') {
    //                         chkresult('b');
    //                     }
    //                     else if (res[i] == 'P') {
    //                         chkresult('p');
    //                     }
    //                 }

    //             }

    //         }
    //     }




    //     function getCase(result_type, result_value, result_id) {
    //         // console.log('get Case: ', result_type, result_value, result_id)
    //         if (result_type == "text") {
    //             document.getElementById(`winrate${result_id}`).style.color = 'khaki';
    //             document.getElementById(`winrate${result_id}`).innerHTML = result_value;
    //             switch (sessionStorage.forType) {
    //                 case '10':
    //                     pirateEmtryBar(result_id);
    //                     break;
    //                 case "2":
    //                     $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
    //                     break;
    //                 case "3":
    //                     $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
    //                 case "4":
    //                     $(`#winrate${result_id}`).removeClass("te4_winrate_num").addClass("te4_winrate");
    //                     $(`#progbar_${result_id}`).css('width', "0%");
    //                     break;
    //                 case "5":
    //                     $(`#winrate${result_id}`).removeClass("te5_winrate_num").addClass("te5_winrate");
    //                     document.getElementById(`status_game${result_id}`).src = "resourcehttps://www.hackbcr.com/images/theme/neon/02_Neon_Lobby_06.png";
    //                     $(`#show_line${result_id}`).addClass("show_line_error");
    //                     break;
    //                 case "6":
    //                     $(`#trophy_${result_id}`).attr('src', "resourcehttps://www.hackbcr.com/images/theme/mayan/02_Mayan_Lobby_05.png");
    //                     $(`#diamond_${result_id}`).attr('src', "resourcehttps://www.hackbcr.com/images/theme/mayan/02_Mayan_Lobby_10.png");
    //                     $(`#winrate${result_id}`).removeClass("te6_winrate_num").addClass("te6_winrate");
    //                     break;
    //                 case "7":
    //                     $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
    //                     document.getElementById(`status_game${result_id}`).src = "resourcehttps://www.hackbcr.com/images/theme/china/02_China_Lobby_06.png";
    //                     break;
    //                 case "8":
    //                     clearInterval(acc_interval[result_id]);
    //                     $(`#winrate${result_id}`).removeClass("te8_winrate_num").addClass("te8_winrate");
    //                     $(`#bitrate${result_id}`).html("");
    //                     break;
    //                 case "9":
    //                     $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
    //                     document.getElementById(`status_game${result_id}`).src = "resourcehttps://www.hackbcr.com/images/theme/skull/02_Skull_Lobby_14.png";
    //                     break;
    //                 default:
    //             }
    //         } else {
    //             if (result_value > 80) {
    //                 document.getElementById(`winrate${result_id}`).style.color = 'lime';
    //             } else if (result_value > 60) {
    //                 document.getElementById(`winrate${result_id}`).style.color = 'gold';
    //             } else {
    //                 document.getElementById(`winrate${result_id}`).style.color = 'red';
    //             }
    //             switch (sessionStorage.forType) {
    //                 default:
    //                     document.getElementById(`winrate${result_id}`).innerHTML = result_value + "%";
    //             }
    //         }
    //     }

    //     function showdata() {
    //         let url = $("#room-url").val();
    //         $.ajax({
    //             url : '/baccarat/getresult', // my php file
    //             type : 'POST', // type of the HTTP request
    //             headers: {
    //                 "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
    //                     "content"
    //                 ),
    //             },
    //             data: {
    //                 url: url
    //             },

    //             success : function(result){

    //                 // console.log("result: ",result);

    //                 var obj = JSON.parse(result);
    //                 var arr = [];

    //                 $.each( obj , function( index, value ) {
    //                     arr.push(value.b_data);
    //                 });
    //                 roomdata(arr);
    //                 //console.log(arr);
    //             }
    //         });
    //     }
    //     showdata();
    //     setInterval(showdata, 5000);
    // }, 10000000)
});

function initialize() {
    var x = JSON.parse(sessionStorage.getItem('formula'));
    // console.log("session storage: ", x);
    // sessionStorage.setItem('formula', JSON.stringify(data['data']));

    $('.navUser').html(`<img src="resourcehttps://www.hackbcr.com/images/new/user.png" style="height:30px;">&nbsp; ${sessionStorage.User} &nbsp; </span>`);
    $('.navCredit').html(`<img src="resourcehttps://www.hackbcr.com/images/new/credit.png" style="height:30px;">&nbsp; ${$.number(sessionStorage.Credit)} &nbsp; </span>`);
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    // console.log(sessionStorage.forType)
    var acc_interval = [];
    switch (sessionStorage.forType) {
        case "10":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_pirate4.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("https://www.hackbcr.com/images/BG.png")');
            $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/Sidebar_sahacker.png")');
            break;
        case "2":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_racing4.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("https://www.hackbcr.com/images/01_Racing_BG.png")');
            $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/Sidebar_sahacker.png")');
            break;
        case "3":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_space4.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("https://www.hackbcr.com/images/01_Space_BG.png")');
            $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/Sidebar_sahacker.png")');
            break;
        case "4":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_winter4.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("https://www.hackbcr.com/images/01_Winter_BG.png")');
            $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/Sidebar_sahacker.png")');
            break;
        case "5":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_neon.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("https://www.hackbcr.com/images/01_Neon_BG.png")');
            $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/02_Neon_Lobby_05_Sidebar.png")');
            break;
        case "6":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_mayan4.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("https://www.hackbcr.com/images/01__Mayan_BG.png")');
            $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/Sidebar_sahacker.png")');
            break;
        case "7":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_china.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("https://www.hackbcr.com/images/01_China_BG.png")');
            $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/Sidebar_sahacker.png")');
            break;
        case "8":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_music.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("https://www.hackbcr.com/images/01_Music_BG.png")');
            $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/Sidebar_sahacker.png")');
            break;
        case "9":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_skull.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("https://www.hackbcr.com/images/01_Skull_BG.png")');
            $('.sidenav').css('background-image', 'url("https://www.hackbcr.com/images/Sidebar_sahacker.png")');
            break;
        case "1":
            var asset_path = "asset/" + 1;
            // $('body').css('background-image', 'url(' + "https://www.hackbcr.com/images/new/" + asset_path + "/BG.png" + ')');
            $('.sidenav').css('background-image', 'url(' + "https://www.hackbcr.com/images/new/" + asset_path + "/side_bar.png" + ')');
            $('.resroom').css('background-image', 'url(' + "https://www.hackbcr.com/images/new/" + asset_path + "/Frame_Lobby.png" + ')');
    }


    function chkresult(s) {
        // console.log(predict);

        if (predict == s) {
            win++;
            rate = Math.round((win / active) * 100);
            winid = 'winrate' + room;
            winhtml = rate + '%';
            if (rate > 80) {
                getCase("num", rate, room)
            }
            else if (rate > 60) {
                getCase("num", rate, room)
            }
            else {
                getCase("num", rate, room)
            }
            stack = 1;
        }
        else if (predict != "") {
            let winid = 'winrate' + room;

            if (active > 0) {
                if (stack < 3) {
                    active--;
                    stack++;
                    // winhtml = 'Waiting for results';
                    // getCase("text", winhtml, room);
                }
                else {
                    rate = Math.round((win / active) * 100);
                    winhtml = rate + '%';
                    if (rate > 80) {
                        getCase("num", rate, room)
                    }
                    else if (rate > 60) {
                        getCase("num", rate, room)
                    }
                    else {
                        getCase("num", rate, room)
                    }
                    stack = 1;
                }
            }
            else {
                winhtml = 'Shuffling';
                getCase("text", winhtml, room);
            }
        }
        if (slot.length == x[0].data.length - 1) slot = slot.substring(1, x[0].data.length - 1);
        slot += s;
        for (let i = 0; i < x.length; i++) {
            if (slot == x[i].data.substring(0, x[i].data.length - 1)) {
                active++;
                predict = x[i].data.charAt(x[i].data.length - 1);
                break;
            }
            predict = "";
        }
    }

    function roomdata(formula) {
        //  console.log('ROOMDATA');
        // sessionStorage.setItem('formula', JSON.stringify(formula));
        // console.log(formula);
        for (room = 0; room < formula.length; room++) {

            res = formula[room].split("");
            //console.log(room +" : "+ res[0]);

            if (typeof res[0] == 'undefined') {
                let winhtml = 'Shuffling';
                getCase("text", winhtml, room);
            }
            else if (res[0] != '') {
                active = 0;
                win = 0;
                slot = "";
                stack = 1;
                predict = "";
                for (let i = 0; i < 72; i++) {

                    if (res[i] == 'B') {
                        chkresult('b');
                    }
                    else if (res[i] == 'P') {
                        chkresult('p');
                    }
                }

            }

        }
    }




    function getCase(result_type, result_value, result_id) {
        // console.log('get Case: ', result_type, result_value, result_id)
        if (result_type == "text") {
            document.getElementById(`winrate${result_id}`).style.color = 'khaki';
            document.getElementById(`winrate${result_id}`).innerHTML = result_value;
            switch (sessionStorage.forType) {
                case '10':
                    pirateEmtryBar(result_id);
                    break;
                case "2":
                    $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
                    break;
                case "3":
                    $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
                case "4":
                    $(`#winrate${result_id}`).removeClass("te4_winrate_num").addClass("te4_winrate");
                    $(`#progbar_${result_id}`).css('width', "0%");
                    break;
                case "5":
                    $(`#winrate${result_id}`).removeClass("te5_winrate_num").addClass("te5_winrate");
                    document.getElementById(`status_game${result_id}`).src = "resourcehttps://www.hackbcr.com/images/theme/neon/02_Neon_Lobby_06.png";
                    $(`#show_line${result_id}`).addClass("show_line_error");
                    break;
                case "6":
                    $(`#trophy_${result_id}`).attr('src', "resourcehttps://www.hackbcr.com/images/theme/mayan/02_Mayan_Lobby_05.png");
                    $(`#diamond_${result_id}`).attr('src', "resourcehttps://www.hackbcr.com/images/theme/mayan/02_Mayan_Lobby_10.png");
                    $(`#winrate${result_id}`).removeClass("te6_winrate_num").addClass("te6_winrate");
                    break;
                case "7":
                    $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
                    document.getElementById(`status_game${result_id}`).src = "resourcehttps://www.hackbcr.com/images/theme/china/02_China_Lobby_06.png";
                    break;
                case "8":
                    clearInterval(acc_interval[result_id]);
                    $(`#winrate${result_id}`).removeClass("te8_winrate_num").addClass("te8_winrate");
                    $(`#bitrate${result_id}`).html("");
                    break;
                case "9":
                    $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
                    document.getElementById(`status_game${result_id}`).src = "resource https://www.hackbcr.com/images/theme/skull/02_Skull_Lobby_14.png";
                    break;
                default:
            }
        } else {
            if (result_value > 80) {
                document.getElementById(`winrate${result_id}`).style.color = 'lime';
            } else if (result_value > 60) {
                document.getElementById(`winrate${result_id}`).style.color = 'gold';
            } else {
                document.getElementById(`winrate${result_id}`).style.color = 'red';
            }
            switch (sessionStorage.forType) {
                default:
                    document.getElementById(`winrate${result_id}`).innerHTML = result_value + "%";
            }
        }
    }

    function showdata() {
        let url = $("#room-url").val();
        $.ajax({
            url: 'http://localhost:8080/getresult?url=' + url.trim() + '&end=getresult', // my php file
            type: 'get', // type of the HTTP request
            // headers: {
            //     "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
            //         "content"
            //     ),
            // },
            // data: {
            //     url: url
            // },

            success: function (result) {

                // console.log("result: ",result);

                var obj = JSON.parse(result);
                var arr = [];

                $.each(obj, function (index, value) {
                    arr.push(value.b_data);
                });
                roomdata(arr);
                //console.log(arr);
            }
        });
    }
    showdata();
    setInterval(showdata, 2000);
}



function winterBar(bar_id, result_value) {
    $(`#progbar_${bar_id}`).removeClass("bar_fade");
    if (result_value > 80) {
        $(`#progbar_${bar_id}`).css('background-image', 'url("resourcehttps://www.hackbcr.com/images/theme/winter/02_Winter_Lobby_04.png")');
    } else if (result_value > 60) {
        $(`#progbar_${bar_id}`).css('background-image', 'url("resourcehttps://www.hackbcr.com/images/theme/winter/02_Winter_Lobby_05.png")');
    } else {
        $(`#progbar_${bar_id}`).css('background-image', 'url("resourcehttps://www.hackbcr.com/images/theme/winter/02_Winter_Lobby_06.png")');
    }
    let bar_widtd = 12 + (88 * (result_value / 100));
    document.getElementById(`progbar_${bar_id}`).animate([
        // keyframes
        {
            width: "12%"
        },
        {
            width: bar_widtd + "%"
        }
    ], {
        // timing options
        duration: 1000,
        fill: "forwards",
        iterations: 1
    });
    setTimeout(function () {
        $(`#progbar_${bar_id}`).addClass("bar_fade");
    }, 1500);
}

function racingAccel(bar_id, result_value) {
    let deg = 90 + ((result_value / 100) * 270);
    document.getElementById(`accel_${bar_id}`).animate([
        // keyframes
        {
            transform: `rotate(90deg)`
        },
        {
            transform: `rotate(${deg}deg)`
        }
    ], {
        // timing options
        duration: 2000,
        fill: "forwards",
        iterations: 1
    });
}

function pirateBar(bar_id, result_value) {
    pirateEmtryBar(bar_id);
    let tbl_left_bar = document.getElementById(`left_bar_${bar_id}`);
    let tbl_right_bar = document.getElementById(`right_bar_${bar_id}`);
    let range = Math.floor(result_value / 5);
    let bar_count = 0;
    let bar_interval = setInterval(function () {
        if (bar_count === range) {
            clearInterval(bar_interval);
            if (range != 0) {
                if (result_value > 80) {
                    $(`.bar_color_${bar_id}`).css("backgroundColor", "lime");
                } else if (result_value > 60) {
                    $(`.bar_color_${bar_id}`).css("backgroundColor", "gold");
                } else {
                    $(`.bar_color_${bar_id}`).css("backgroundColor", "red");
                }
                tbl_left_bar.rows[0].cells[bar_count - 1].classList.add(`bar_fade`);
                tbl_left_bar.rows[0].cells[bar_count - 2].classList.add(`bar_fade`);
                tbl_right_bar.rows[0].cells[19 - (bar_count - 1)].classList.add(`bar_fade`);
                tbl_right_bar.rows[0].cells[19 - (bar_count - 2)].classList.add(`bar_fade`);
            }
        } else {
            if (bar_count > 14) {
                tbl_left_bar.rows[0].cells[bar_count].classList.add(`bar_color_${bar_id}`);
                tbl_right_bar.rows[0].cells[19 - bar_count].classList.add(`bar_color_${bar_id}`);
                $(`.bar_color_${bar_id}`).css("backgroundColor", "lime");
            } else if (bar_count > 10) {
                tbl_left_bar.rows[0].cells[bar_count].classList.add(`bar_color_${bar_id}`);
                tbl_right_bar.rows[0].cells[19 - bar_count].classList.add(`bar_color_${bar_id}`);
                $(`.bar_color_${bar_id}`).css("backgroundColor", "gold");
            } else {
                tbl_left_bar.rows[0].cells[bar_count].classList.add(`bar_color_${bar_id}`);
                tbl_right_bar.rows[0].cells[19 - bar_count].classList.add(`bar_color_${bar_id}`);
                $(`.bar_color_${bar_id}`).css("backgroundColor", "red");
            }
            bar_count++;
        }
    }, 40);
}

function pirateEmtryBar(bar_id) {
    html = `<tr style="width:100%"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
    $(`#left_bar_${bar_id}`).html(html);
    $(`#right_bar_${bar_id}`).html(html);
}

function drawbitrate(bit_id, result_value) {
    let max_range = Math.floor(result_value / 5);
    let html = "";
    rand_num = [];
    for (let i = 0; i < 10; i++) {
        rand_num.push(Math.floor(Math.random() * max_range))
    }
    for (let row = 0; row < 20; row++) {
        html += "<tr>";
        for (let col = 0; col < 10; col++) {
            if (row < (19 - rand_num[col])) {
                html += "<td style='background-color: none;'></td>"
            } else {
                if (result_value > 80) {
                    td_color = "lime";
                } else if (result_value > 60) {
                    td_color = "gold";
                } else {
                    td_color = "red";
                }
                html += `<td style='background-color: ${td_color};'></td>`
            }
        }
        html += "</tr>";
    }
    $(`#bitrate${bit_id}`).html(html);
}

function changeForType2(type) {
    var elements = document.getElementsByClassName('nav-linkk');
    for (var i = 0; i < elements.length; i++) {
        if (type === 1) {
            elements[i].style.color = 'khaki';
        } else {
            elements[i].style.color = 'black';
        }
    }
}

function changeForType(type) {

    sessionStorage.forType = type;
    window.location.reload();

    //window.location.href = `lobby.php?type=${sessionStorage.forType}`;
}