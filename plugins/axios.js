import * as axios from "axios";
import config from "~/config";
let options = {};
options.baseURL = `http${config.server.ssl ? "s" : ""}://${config.server.url}/${config.server.apiVersion}/api`;
export default axios.create(options);
