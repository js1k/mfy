import { get, post } from './axios';
export default {
    /*
     * 账号密码登录
     */
    accountLogin: (userName, password) => post('/app/loginAjax.action', { userName, password }),

    /*
     * 获取当前人信息
     */
    getUserInfo: (params) => get('/user', params),

    /*
     * 查询往来账
     */
    findSalesmanDetail: (params) => post('/SegmentReconciliation/Account/findSalesmanDetail', params),

    /*
     * 查询分部对账 账户余额  预警余额
     */
    findDetailsByCode: (params) => post('/SegmentReconciliation/Account/findDetailsByCode', params),

    /*
     * 账单 中转费账单查询
     */
    findBillList: (params) => post('/SegmentReconciliation/bill/findBillList', params),

    /*
     * 账单 派费查询
     */
    findDeliveryList: (params) => post('/SegmentReconciliation/delivery/findDeliveryList', params),

    /*
     * 中转费明细查询
     */
    findBillDetails: (params) => post('/SegmentReconciliation/bill/findBillDetails', params),

    /*
     * 计费汇总中转费 查询
     */
    findBillDetailSum: (params) => post('/SegmentReconciliation/bill/findBillDetailSum', params),

    /*
     * 计费汇总派费 查询
     */
    findDeliveryDetailSum: (params) => post('/SegmentReconciliation/delivery/findDeliveryDetailSum', params),

    /*
     * 计费汇总中转费 明细查询
     */
    getByBillCode: (params) => post('/SegmentReconciliation/bill/getByBillCode', params),

    /*
     * 计费汇总 明细查询
     */
    getByBillCodeDelivery: (params) => post('/SegmentReconciliation/delivery/getByBillCodeDelivery', params),

    /*
     * 客户分页列表
     */
    getCustomerList: (params) => post('/CustomerAutoCharge/pageQueryCustomer', params),

    /*
     * 根据客户获取对应价格
     */
    getPriceByKcode: (params) => post('/CustomerAutoCharge/getCustomerFee', params),

    /*
     * 判断网点是否冻结
     */
    isFreezen: (params) => post('/CustomerAutoCharge/getOrgAccount', params),

    /*
     * 热敏纸类型
     */
    getThermalPaperList: (params) => post('/CustomerAutoCharge/queryThermalPaperList', params),

    /*
     * 客户下拉列表
     */
    getCustomerSelectList: (params) => post('/CustomerAutoCharge/queryCustomerList', params),

    /*
     * 提交订单
     */
    submitOrder: (params) => post('/CustomerAutoCharge/submitOrder', params)
};
