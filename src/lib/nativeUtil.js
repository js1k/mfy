import { appUtil } from './commonUtils';

export const nativeApp$ = () => {
    if (window.nativeApp) {
        return;
    }
    window.nativeApp = {
        qrScan: function (result) {
            const r = JSON.parse(result);
            if (r.status === 200) {
                this.qrScan.success(r.data);
            } else {
                console.error(r.message);
                this.qrScan.fail();
            }
        }
    };
};
export const NA = {
    qrScan: (success, fail) => {
        const nativeApp$ = window.nativeApp;
        if (!success) {
            success = () => {
            };
        }
        nativeApp$.qrScan.success = success;
        if (!fail) {
            fail = () => {
            };
        }
        nativeApp$.qrScan.fail = fail;
        appUtil.qrScan();
    }
};
