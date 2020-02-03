// import Vue from 'vue';
export const setupWebViewJavascriptBridge = (callback) => {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!isiOS) {
        if (window.WebViewJavascriptBridge) {
            callback(WebViewJavascriptBridge);
        } else {
            document.addEventListener(
                'WebViewJavascriptBridgeReady',
                function () {
                    callback(WebViewJavascriptBridge);
                },
                false
            );
        }
    } else {
        if (window.WebViewJavascriptBridge) {
            return callback(window.WebViewJavascriptBridge);
        }
        if (window.WVJBCallbacks) {
            return window.WVJBCallbacks.push(callback);
        }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function () {
            document.documentElement.removeChild(WVJBIframe);
        }, 0);
    }
};
/**
 * 获取登录用户的key
 * @returns {*}
 */
export const getToken = () => {
    let token = null;
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (process.env.NODE_ENV === 'development') {
        token = process.env.TOKEN;
        return Promise.resolve(token);
    }
    if (!token) {
        // Vue.$vux.toast.text(window);
        if (!isiOS) {
            token = window.app.getToken();
            return Promise.resolve(token);
        } else {
            return new Promise(function (resolve, reject) {
            // 异步请求
                setupWebViewJavascriptBridge(function (bridge) {
                    bridge.callHandler('getToken', null, function (responseData) {
                        resolve(responseData);
                    });
                });
            });
        }
    }
};
export const getFileUrl = (fileId) => {
    return '/steward-api/attachment/getFile?picId=' + fileId;
};

export const appUtil = {
    // h5页面跳转H5页面
    /**
     * @param {*} param 
     * itemName = "无忧上报"; 右上角文字名称
     * showNavigationBar = "Y"; 是否展示原生导航条
     * itemPushName = "noWorry";   页面名  标志
     * itemHtmlPushUrl = "comeGo"; 页面路径
     */
    goH5page(param){
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('goH5page', param);
        });
    },
    //  native 调用H5获取参数方法
    /**
     * @param {*} sendParams 
     * native所需要的数据  对象格式
     */
    getH5Param(sendParams){
        // Native 调 JS, 并获取 JS 的返回值
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.registerHandler('getH5Param', function (param, callback) {
                /* eslint-disable */
                callback(sendParams);
            })
        })
    },
    getParameters: () => {
        let param = {};
        let paramStr = null;
        if (window && window.app) {
            try {
                paramStr = window.app.getParameters();
            } catch (e) {
                console.error('获取原生参数出错：' + JSON.stringify(e));
                return Promise.reject(JSON.stringify(e));
            }
            if (paramStr) {
                try {
                    param = JSON.parse(paramStr);
                } catch (e) {
                    console.error(JSON.stringify(e));
                    return Promise.reject(JSON.stringify(e));
                }
            }
            return Promise.resolve(param);
        } else {
            return new Promise(function (resolve, reject) {
                try {
                    setupWebViewJavascriptBridge(function (bridge) {
                        bridge.callHandler('getParameters', null, function (responseData) {
                            if (responseData) {
                                param = JSON.parse(responseData);
                                resolve(param);
                            }
                        });
                    });
                } catch (e) {
                    reject(JSON.stringify(e));
                    console.error(JSON.stringify(e));
                }
            });
        }
    },
    showHead: () => {
        let show = true;
        if (window && window.app) {
            let appShow = window.app.navigationBarHidden();
            if (appShow) {
                show = !appShow;
            }
            return Promise.resolve(show);
        } else {
            return new Promise(function (resolve, reject) {
                try {
                    // 异步请求
                    setupWebViewJavascriptBridge(function (bridge) {
                        bridge.callHandler('navigationBarHidden', null, function (responseData) {
                            let appShow = responseData;
                            if (appShow) {
                                show = !appShow;
                                resolve(show);
                            }
                        });
                    });
                } catch (e) {
                    console.error('获取原生参数出错：' + JSON.stringify(e));
                    reject(JSON.stringify(e));
                }
            });
        }
    },
    showClose: () => {
        let show = false;
        if (window && window.app) {
            let appClose = window.app.getShowClose();
            if (appClose && appClose === true) {
                show = true;
            }
            return Promise.resolve(show);
        } else {
            return new Promise(function (resolve, reject) {
                try {
                    // 异步请求
                    setupWebViewJavascriptBridge(function (bridge) {
                        bridge.callHandler('getShowClose', null, function (responseData) {
                            if (responseData) {
                                resolve(responseData);
                            }
                        });
                    });
                } catch (e) {
                    console.error('获取原生参数出错：' + JSON.stringify(e));
                    reject(JSON.stringify(e));
                }
            });
        }
    },
    pushVCName: (name, param) => {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('pushVCName', {'name': name, 'param': JSON.stringify(param)});
        });
    },
    back: () => {
        if (window && window.app) {
            window.app.backClick();
        } else {
            setupWebViewJavascriptBridge(function (bridge) {
                bridge.callHandler('backClick');
            });
        }
    },
    goToRoot: () => {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('popRootClick');
        });
    },
    qrScan: () => {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('QRScan');
        });
    },
    choosePic: (size) => {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('picture', {'size': size});
        });
    },
    newChoosePic: (size, megabyte) => {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('pictureImageKBytes', {'size': size, 'fImageKBytes': megabyte});
        });
    },
    goToTell: (phoneNum) => {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('getPhoneNumber', {'phoneNum': phoneNum});
        });
    },
    subscribe: (waybillNo) => {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('addSubscribeClickWithWaybillNo', {'waybillNo': waybillNo});
        });
    },
    showWaybillSidebarWithWaybillNo: (waybillNo) => {
        if (window && window.app) {
            window.app.showWaybillSidebarWithWaybillNo(waybillNo);
        } else {
            setupWebViewJavascriptBridge(function (bridge) {
                bridge.callHandler('showWaybillSidebarWithWaybillNo', {'waybillNo': waybillNo});
            });
        }
    },
    //  获取从app聊天室跳转至H5页面所需参数方法
    getAbnormalProblem: () => {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(function (bridge) {
                bridge.callHandler('getAbnormalProblem', '', function (data) {
                    resolve(data);
                });
            });
        });
    },
};
export const showTokenInvalidAlert = () => {
    if (window && window.app) {
        window.app.showTokenInvalidAlert();
    } else {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('showTokenInvalidAlert');
        });
    }
};
