'use strict';

module.exports = {
    messages:{
        type: '请选择一个代码提交类型',
        scope: '选择一个当前提交所属模块',
        subject: '简短描述一下你的本次提交内容',
        body: '详细描述一下你的本次提交内容(可以跳过)',
        footer: '列出本次提交解决的Bug的TapdId E.g: 关闭 #32, #33'
    },
  types: [
    {
      value: 'feat',
      name : '  Feat:     新功能开发'
    },
    {
      value: 'fix',
      name : '  Fix:      修复 Bug'
    },
    {
      value: 'refactor',
      name : '  Refactor: 代码重构：既不是Bug修复也不是新功能开发的代码改动'
    },
    {
      value: 'docs',
      name : '  Docs:     修改说明、设计等文档'
    },
    {
      value: 'test',
      name : '  Test:     新增或修改测试用例'
    },
    {
      value: 'chore',
      name : '  Chore:    修改配置文件或者构建工具'
    },
    {
      value: 'style',
      name : '  Style:    代码格式修改，注意不是CSS修改'
    },
    {
      value: 'revert',
      name : '  Revert:   撤销提交'
    }
  ],

  scopes: [
      {value:'config',name:'工程配置'},
  ],
  allowCustomScopes: false,
//   allowBreakingChanges: ["Feat", "Fix"],
  appendBranchNameToCommitMessage:true,
};