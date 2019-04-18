// 平台数据排行榜
exports.RANK_LIST = {
    "loan": "月度出借英雄榜",
    "newUser": "月度新手达人榜"
}; 

/**
 * == 借款数据+逾期数据 ==
 * format 单位 0:保留整数, 1:百分比, 2:保留两位小数
 * type 类型 loan:借款数据, single:单户占比, overdue:逾期数据, loan_overdue:金额分级逾期率, item_overdue:项目分级逾期率, echart: 用户echart表格渲染的
 */
exports.LOAN_DATA_LIST = [
    {"format": "2", "type": "loan", "item_type": "ljjkje", "describe": "累计借贷金额(元)", "tips": "指自从业机构成立起，经从业机构撮合完成的借款项目的本金总合"},
    {"format": "0", "type": "loan", "item_type": "ljjkbs", "describe": "累计借贷笔数(笔)", "tips": "指自从业机构成立起，经从业机构撮合完成的借款交易笔数总合"},
    {"format": "0", "type": "loan", "item_type": "ljjkrsl", "describe": "累计借款人数量(人)", "tips": "指借款人通过从业机构成功借款的借款人总数。同一借款人多次借款的，按实际借款人计算。(例如：张三借款 3 次，累计借款人数量为 1)"},
    {"format": "0", "type": "loan", "item_type": "ljjcrsl", "describe": "累计出借人数量(人)", "tips": "指出借人通过从业机构成功出借资金的出借人总数。同一出借人多次出借的，按实际出借人计算。(例如：张三出借 3次，累计出借人数量为 1)"},
    {"format": "2", "type": "loan", "item_type": "ljdcje", "describe": "累计代偿金额(元)", "tips": "指自从业机构成立起，因借款方违约等原因第三方(非借款人、非从业机构)代为偿还的总金额"},
    {"format": "0", "type": "loan", "item_type": "ljdcbs", "describe": "累计代偿笔数(笔)", "tips": "指自从业机构成立起，因借款方违约等原因第三方(非借款人、非从业机构)代为偿还的笔数"},
    {"format": "2", "type": "loan", "item_type": "glgxjkye", "describe": "关联关系借款余额(元)", "tips": "指截至统计时点，与平台具有关联关系的借款人通过平台撮合完成的借款总余额"},
    {"format": "0", "type": "loan", "item_type": "glgxjkbs", "describe": "关联关系借款笔数(笔)", "tips": "指截至统计时点，与平台具有关联关系的借款人通过平台撮合完成的借款余额总笔数"},
    {"format": "0", "type": "loan", "item_type": "jkyebs", "describe": "借款余额笔数(笔)", "tips": "截至统计时点，平台所有借款人尚未偿还的总笔数"},
    {"format": "2", "type": "loan", "item_type": "rjljcjje", "describe": "人均累计出借金额(元)", "tips": "指自平台上线运营之日起，累计交易总额与累计出借人数量之比"},
    {"format": "2", "type": "loan", "item_type": "rjljjkje", "describe": "人均累计借款金额(元)", "tips": "指自平台上线运营之日起，累计交易总额与累计借款人数量之比"},
    {"format": "2", "type": "loan", "item_type": "jkye", "describe": "借款余额(元)", "tips": "截至统计时点，平台所有借款人尚未偿还的本金总金额(不包括利息部分)"},
    {"format": "0", "type": "loan", "item_type": "dqcjrsl", "describe": "当前出借人数量(人)", "tips": "指截至统计时点仍存在待收借款的出借人总数。同一出借人多次出借的，按实际出借人计算"},
    {"format": "0", "type": "loan", "item_type": "dqjkrsl", "describe": "当前借款人数量(人)", "tips": "指截至统计时点仍存在待还借款的借款人总数。同一借款人多次借款的，按实际借款人计算"},
    {"format": "2", "type": "loan", "item_type": "lkye", "describe": "利息余额(元)", "tips": "指截至统计时点，经从业机构撮合完成且尚未偿还的借款利息总金额(不包括本金部分)"},

    {"format": "1", "type": "single", "item_type": "qsdjkrdhjezb", "describe": "前十大借款人待还金额占比", "tips": "指在平台撮合的项目中，借款最多的前十户借款人的借款余额占总借款余额的比例"},
    {"format": "1", "type": "single", "item_type": "zddyjkrdhjezb", "describe": "最大单一借款人待还金额占比", "tips": "指在平台撮合的项目中，借款最多一户借款人的借款余额占总借款余额的比例"},
    {"format": "1", "type": "single", "item_type": "zdshcjyezb", "describe": "最大十户出借余额占比", "tips": "指截至统计时点，出借金额最大的前十名出借人的出借金额总和与平台总出借金额之比"},
    {"format": "1", "type": "single", "item_type": "zddhcjyezb", "describe": "最大单户出借余额占比", "tips": "指截至统计时点，出借金额最大的出借人的出借金额总和与平台总出借金额之比"},

    {"format": "2", "type": "overdue", "item_type": "yqje", "describe": "逾期中金额(元)", "tips": "指按合同约定，出借人到期未收到本金和利息的金额总合。收到，是指资金实际划付至出借人银行账户"},
    {"format": "0", "type": "overdue", "item_type": "yqbs", "describe": "逾期中笔数(笔)", "tips": "指按合同约定，出借人到期未收到本金和利息的借款的笔数。收到，是指资金实际划付至出借人银行账户"},
    {"format": "2", "type": "overdue", "item_type": "yq90je", "describe": "逾期90天以上金额(元)", "tips": "指逾期90天(不含)以上的借款本金余额"},
    {"format": "0", "type": "overdue", "item_type": "yq90bs", "describe": "逾期90天以上笔数(笔)", "tips": "指逾期90天(不含)以上的借款的笔数"},

    {"format": "1", "type": "echart", "item_type": "jeyql", "describe": "金额逾期率", "tips": "指截至统计时点，逾期金额与待偿金额之比"},
    {"format": "1", "type": "loan_overdue", "item_type": "jkyql90", "describe": "90天"},
    {"format": "1", "type": "loan_overdue", "item_type": "jkyql90-180", "describe": "90~180天"},
    {"format": "1", "type": "loan_overdue", "item_type": "jkyql180", "describe": "180天以上"},

    {"format": "1", "type": "echart", "item_type": "xmyql", "describe": "项目逾期率", "tips": "指截至统计时点，当前所有处于逾期状态的项目数与尚未偿还交易总笔数之比"},
    {"format": "1", "type": "item_overdue", "item_type": "xmyql90", "describe": "90天"},
    {"format": "1", "type": "item_overdue", "item_type": "xmyql90-180", "describe": "90~180天"},
    {"format": "1", "type": "item_overdue", "item_type": "xmyql180", "describe": "180天以上"}
];