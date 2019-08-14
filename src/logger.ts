import { configure, getLogger } from 'log4js';

configure({
    appenders: {
        out: { type: 'file', filename: 'log' }
    },
    categories: {
        "default": { appenders: ['out'], level: 'info' }
    }
});
export default getLogger();
