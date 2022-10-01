import {util} from "../../Framework/util/util.js";

class document {
    getInfo() {
        return {
            id: "document",
            functions: {
                "test": test()
            }
        };
    }

    test(foo) {
        return(foo);
    }
};

var plugin = new document();

export {plugin};
