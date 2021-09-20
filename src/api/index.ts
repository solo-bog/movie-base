import * as authAPI from "./authAPI";
import * as accountAPI from "./accountAPI";
import * as movieAPI from "./movieAPI";
import * as tvAPI from "./tvAPI";
import APIconfig from "./config";

export default { ...authAPI, ...accountAPI, ...movieAPI, ...tvAPI, APIconfig };
