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
    } let url = $("#room-url").val();
    // console.log()
    //sessionStorage.setItem('forType', 1);
    sessionStorage.setItem('formula', JSON.stringify(data));
    initialize();

    // $.ajax({
    //     type: "post",
    //     url: "/get_formula_data",
    //     headers: {
    //         "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    //     },
    //     timeout: 30000,
    //     data: {
    //         url: url,
    //     },
    //     beforeSend: function () {
    //         // Swal.fire({
    //         //     title: "Connecting...",
    //         //     allowOutsideClick: false,
    //         // });
    //         // swal.showLoading();
    //     },
    //     success: function (response) {
    //         // console.log(response);
    //         let data = JSON.parse(response);
    //         // console.log(data);
    //         // swal.close();
    //         sessionStorage.setItem("formula", JSON.stringify(data));

    //         initialize();
    //     },
    //     error: function (jqXHR, textStatus, errorThrown) {
    //         swal.close();
    //         // console.log("Error");
    //         Swal.fire({
    //             type: "error",
    //             title: "Cannot Fetch Data",
    //             text: "Error while fetching data for lobby. Contact support",
    //         });
    //     },
    // });
});

function initialize() {
    let url = new URL(window.location.href);
    let path = url.pathname.split("/");

    let roomid = parseInt(path[3].replace('.html', ''));

    var predata = "";
    var count = 0;

    var str = "" + roomid;
    var pad = "000";
    var ans = pad.substring(0, pad.length - str.length) + str;
    // document.title = "BACCARAT - " + ans;

    var x = JSON.parse(sessionStorage.getItem("formula"));
    var firstrun = true;

    ghtml = "";
    for (var i = 0; i < 38; i++) {
        ghtml += "<tr>";
        for (var j = 0; j < 60; j++) {
            if (i == 26)
                ghtml +=
                    '<td style="border: 1px solid rgba(255,255,255,0.2);background-color: #ff0033;width: 7px;height: 1px;"></td>';
            else
                ghtml +=
                    '<td style="border: 1px solid rgba(255,255,255,0.2);width: 7px;height: 7px;"></td>';
        }
        ghtml += "</tr>";
    }
    document.getElementById("graph_tbl").innerHTML = ghtml;

    var graph_row = document.getElementById("graph_tbl").rows.length;
    // document.getElementById("graph_tbl").rows[graph_row-1].cells[31].scrollIntoView(false);

    function tblStack(result) {
        let sTable = document.getElementById("tbl_stack");
        let stackRowC = sTable.rows.length;
        let stackRow = sTable.insertRow(stackRowC);
        let stackCol1 = stackRow.insertCell(0);
        let stackCol2 = stackRow.insertCell(1);
        let stackCol3 = stackRow.insertCell(2);
        stackCol1.innerHTML = stackRowC + 1;
        if (result) {
            stackCol3.innerHTML = "win";
            stackCol2.innerHTML = stack;
            stackCol3.style.backgroundColor = "#28a745";
        } else {
            stackCol3.innerHTML = "lose";
            stackCol2.innerHTML = "-";
            stackCol3.style.backgroundColor = "#dc3545";
        }
        let objDiv = document.getElementById("tbl_stack");
        objDiv.scrollTop = objDiv.scrollHeight;
        document.getElementById("total").innerHTML = stackRowC + 1;
        document.getElementById("win").innerHTML = win;
        document.getElementById("lose").innerHTML = active - win;
    }
    function chkresult(s) {
        if (predict == s) {
            win++;
            axisY--;
            if (axisY == g_line) axisY--;
            document.getElementById("graph_tbl").rows[axisY].cells[
                axisX
            ].style.backgroundColor = "#ccff00";
            // document.getElementById("graph_tbl").rows[axisY].cells[axisX].scrollIntoView(false);
            rate = Math.round((win / active) * 100);
            document.getElementById("winrate").innerHTML = rate + "%";
            document.getElementById("prestat").innerHTML = rate + "%";
            // document.getElementById('nextPre').innerHTML = "Next Match";
            axisX++;
            tblStack(true);
            stack = 1;
            // console.log("Win : " + win + " Active : " + active + " Stack : " + stack);
        } else if (predict != "") {
            axisY++;
            if (axisY > g_line + 10) axisY = g_line + 10;
            if (axisY == g_line) axisY++;
            document.getElementById("graph_tbl").rows[axisY].cells[
                axisX
            ].style.backgroundColor = "#ff00cc";
            // document.getElementById("graph_tbl").rows[axisY].cells[axisX].scrollIntoView(false);
            if (active > 0) {
                if (stack < 3) {
                    active--;
                    stack++;
                    document.getElementById("nextPre").innerHTML =
                        "( Stack" + stack + "/ 3)";
                } else {
                    rate = Math.round((win / active) * 100);
                    document.getElementById("winrate").innerHTML = rate + "%";
                    document.getElementById("prestat").innerHTML =
                        "The statistics of the past" + rate + "%";
                    tblStack(false);
                    stack = 1;
                    // document.getElementById('nextPre').innerHTML = "Next Match";
                }
            }
            axisX++;
            // console.log("Win : " + win + " Active : " + active + " Stack : " + stack);
        }
        if (slot.length == x[0].data.length - 1)
            slot = slot.substring(1, x[0].data.length - 1);
        slot += s;
        for (let i = 0; i < x.length; i++) {
            if (slot == x[i].data.substring(0, x[i].data.length - 1)) {
                // console.log(slot);
                document.getElementById("nextPre").innerHTML =
                    "( Stack" + stack + "/ 3)";
                active++;
                predict = x[i].data.charAt(x[i].data.length - 1);
                return true;
            }
            predict = "";
        }
        return false;
    }

    function reduceCredit(symbol) {
        $.ajax({
            url: "/baccarat/reduce_credit",
            type: "POST", // type of the HTTP request
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            timeout: 30000,
        }).done(function (msg) {
            if (msg == "Out") {
                window.location.href = "/";
            } else {
                let picurl = "https://www.hackbcr.com/images/symbol_" + symbol + ".png";
                Swal.fire({
                    imageUrl: picurl,
                    animation: false,
                    width: 200,
                    background: "rgba(0,0,0,0)",
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        popup: "animated flip",
                    },
                });
                let strcredit = $.number(msg);
                let creditClass = $(".credit-text");
                for (let i = 0; i < creditClass.length; i++) {
                    // console.log(creditClass[i]);
                    $(creditClass[i]).text(strcredit);
                }
                // $('#navCredit').html('<img src="resourcehttps://www.hackbcr.com/images/new/credit.png" style="height:100%;"> &nbsp;' + strcredit + ' &nbsp;');
                // $('#showCreditM').html('Credit : ' + strcredit);
            }
        });
    }

    function showdata(data) {
        // if () {
        if (predata != data) {
            // console.log(data);
            res = data.split("");
            if (res[0] == "" && count != 0) window.location.reload();
            predata = data;

            banker = 0;
            player = 0;
            equal = 0;
            active = 0;
            win = 0;
            stack = 1;
            slot = "";
            row = 0;
            col = -1;
            count = 0;
            predict = "";
            waittime = 30;
            g_line = 26;
            axisY = g_line;
            axisX = 1;
            document.getElementById("tbl_stack").innerHTML = "";

            if (!firstrun) {
                counter = setInterval(timer, 1000); //1000 will  run it every 1 second
                function timer() {
                    waittime = waittime - 1;
                    if (waittime < 0) {
                        clearInterval(counter);
                        // document.getElementById('countdown').style.fontSize = '250%';
                        // document.getElementById('countdown').innerHTML = "Wait for results ..";
                        document.getElementById("countdown2").style.color =
                            "white";
                        document.getElementById("countdown2").innerHTML =
                            "Wait a moment ..";
                        return;
                    }
                    // document.getElementById('countdown').style.fontSize = '400%';
                    // document.getElementById('countdown').innerHTML = waittime;
                    document.getElementById("countdown2").style.color =
                        "Orange";
                    document.getElementById("countdown2").innerHTML =
                        "Next round will start in " + waittime + " seconds";
                }
            }
            for (let i = 0; i < 72; i++) {
                if (i % 6 == 0) col++;
                if (res[i] == "B") {
                    // html = '<img src="./resourcehttps://www.hackbcr.com/images/new/asset/'+ sessionStorage.forType +'/symbol_b_small.png" style="height:30px;">';
                    html =
                        '<img src="https://www.hackbcr.com/images/symbol_b_small.png" style="height:30px;">';
                    banker++;
                    count++;
                    chkresult("b");
                } else if (res[i] == "P") {
                    //html = '<img src="./resourcehttps://www.hackbcr.com/images/symbol_p_small.png">';
                    // html = '<img src="./resourcehttps://www.hackbcr.com/images/new/asset/'+ sessionStorage.forType +'/symbol_p_small.png" style="height:30px;">';
                    html =
                        '<img src="https://www.hackbcr.com/images/symbol_p_small.png" style="height:30px;">';

                    player++;
                    count++;
                    chkresult("p");
                } else if (res[i] == "T") {
                    //html = '<img src="./resourcehttps://www.hackbcr.com/images/symbol_t_small.png">';
                    // html = '<img src="./resourcehttps://www.hackbcr.com/images/new/asset/'+ sessionStorage.forType +'/symbol_t_small.png" style="height:30px;">';
                    html =
                        '<img src="https://www.hackbcr.com/images/symbol_t_small.png" style="height:30px;">';

                    equal++;
                    count++;
                    if (predict != "") {
                        document.getElementById("graph_tbl").rows[axisY].cells[
                            axisX
                        ].style.backgroundColor = "#ff3300";
                        // document.getElementById("graph_tbl").rows[axisY].cells[axisX].scrollIntoView(false);
                        axisX++;
                    }
                } else {
                    html = '<img src="" style="height: 24px;width: 24px;">';
                }

                document.getElementById("rtable").rows[i % 6].cells[
                    col
                ].innerHTML = html;
            }
            switch (predict) {
                case "b":
                    // html = '<img src="./resourcehttps://www.hackbcr.com/images/new/asset/'+ sessionStorage.forType +'/symbol_b.png" style="height:60px;">';
                    html =
                        '<img src="https://www.hackbcr.com/images/symbol_b.png" style="height:60px;">';
                    //reduceCredit("b");
                    break;
                case "p":
                    // html = '<img src="./resourcehttps://www.hackbcr.com/images/new/asset/'+ sessionStorage.forType +'/symbol_p.png" style="height:60px;">';
                    html =
                        '<img src="https://www.hackbcr.com/images/symbol_p.png" style="height:60px;">';
                    //reduceCredit("p");
                    break;
                case "t":
                    // html = '<img src="./resourcehttps://www.hackbcr.com/images/new/asset/'+ sessionStorage.forType +'/symbol_t.png" style="height:60px;">';
                    html =
                        '<img src="https://www.hackbcr.com/images/symbol_t.png" style="height:60px;">';
                    //reduceCredit("t");
                    break;
                default:
                    html = "Analyzing..";
            }
            document.getElementById("predict").innerHTML = html;

            // console.log(count);

            if (count > 0) {
                document.getElementById("bstr").innerHTML =
                    Math.round((banker / count) * 100) + "%";
                document.getElementById("pstr").innerHTML =
                    Math.round((player / count) * 100) + "%";
                document.getElementById("tstr").innerHTML =
                    Math.round((equal / count) * 100) + "%";

                document.getElementById("redbar").style.width =
                    Math.round((banker / count) * 100) + "%";
                document.getElementById("blubar").style.width =
                    Math.round((player / count) * 100) + "%";
                document.getElementById("grnbar").style.width =
                    Math.round((equal / count) * 100) + "%";
            }

            document.getElementById("countB").innerHTML = banker;
            document.getElementById("countP").innerHTML = player;
            document.getElementById("countT").innerHTML = equal;

            document.getElementById("bfoot").innerHTML = "B " + banker;
            document.getElementById("pfoot").innerHTML = "P " + player;
            document.getElementById("tfoot").innerHTML = "T " + equal;

            firstrun = false;
        }
        // else {
        //   Swal.fire({
        //     type: 'error',
        // title: 'You do not have enough Credits to use this service',
        // text: 'Please top up before continuing to use'
        //   });
        //   setTimeout(function() {
        //     window.history.back();
        //   }, 3000);
        // }
    }

    function sendWS() {
        let url = $("#room-url").val();

        $.ajax({
            url: 'http://localhost:8080/getresult?url=' + url.trim() + '&end=getnewresult', // my php file
            type: "get", // type of the HTTP request
            // headers: {
            //     "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            // },
            // timeout: 30000,
            // data: {
            //     url: url,
            // },
            success: function (result) {
                // console.log(JSON.parse(result));
                var obj = JSON.parse(result);
                var arr = [];
                $.each(obj, function (index, value) {
                    arr.push(value.b_data);
                });
                // console.log(arr);
                showdata(arr[roomid - 1]);
            },
        });
    }
    sendWS();
    setInterval(sendWS, 2000);
}

// function back() {
//     var ref = document.referrer;
//     let domain = window.location.hostname;

//     // console.log("clicked");
//     if (ref.includes(domain) && ref === window.location.href) {
//         // window.location=document.referrer;
//         let route = ref.split("/");
//         let previousPage = "/" + route[3] + "/lobby";

//         window.location = previousPage;
//     } else if (ref.includes(domain) && ref !== window.location.href) {
//         window.location = document.referrer;
//     } else {
//         window.location = "/";
//     }
// }
function changeForType(type) {

    sessionStorage.forType = type;
    window.location.reload();

    //window.location.href = `lobby.php?type=${sessionStorage.forType}`;
}