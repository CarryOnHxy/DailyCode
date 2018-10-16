/*
Navicat MySQL Data Transfer

Source Server         : wamp64
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : xiangmu

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-09-07 17:09:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for de_department
-- ----------------------------
DROP TABLE IF EXISTS `de_department`;
CREATE TABLE `de_department` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT COMMENT '部门的编号',
  `depart_name` varchar(30) NOT NULL COMMENT '部门名称',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态1启用2禁用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of de_department
-- ----------------------------

-- ----------------------------
-- Table structure for tp_department
-- ----------------------------
DROP TABLE IF EXISTS `tp_department`;
CREATE TABLE `tp_department` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `depart_name` varchar(30) DEFAULT NULL,
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '1正常2禁用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_department
-- ----------------------------
INSERT INTO `tp_department` VALUES ('10', '技术部', '1');
INSERT INTO `tp_department` VALUES ('9', '市场部', '1');
INSERT INTO `tp_department` VALUES ('3', '销售部', '1');
INSERT INTO `tp_department` VALUES ('4', '业务部', '1');
INSERT INTO `tp_department` VALUES ('5', '人事部', '1');
INSERT INTO `tp_department` VALUES ('6', '财务部', '1');
INSERT INTO `tp_department` VALUES ('7', '企划部', '2');
INSERT INTO `tp_department` VALUES ('13', '行政部', '1');
INSERT INTO `tp_department` VALUES ('12', '管理部', '2');
INSERT INTO `tp_department` VALUES ('14', '广告部', '1');
INSERT INTO `tp_department` VALUES ('15', '测试', '0');

-- ----------------------------
-- Table structure for tp_employee
-- ----------------------------
DROP TABLE IF EXISTS `tp_employee`;
CREATE TABLE `tp_employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '职位编号',
  `depart_id` smallint(5) unsigned NOT NULL COMMENT '部门编号',
  `leader_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '直属领导编号',
  `role_id` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '角色编号',
  `position_id` smallint(5) unsigned NOT NULL COMMENT '职位编号',
  `user_code` varchar(20) NOT NULL COMMENT '员工账号',
  `real_name` varchar(20) NOT NULL COMMENT '员工姓名',
  `user_pwd` char(32) NOT NULL COMMENT '密码登录',
  `user_img` varchar(255) DEFAULT '/uploads/2018081819dee1bf7bc93772c6e133ff820f00ec.jpg' COMMENT '用户头像',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态1正常2禁用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_employee
-- ----------------------------
INSERT INTO `tp_employee` VALUES ('1', '10', '8', '13', '6', 'vvyng11', 'vvyng112', 'e10adc3949ba59abbe56e057f20f883e', '/uploads/20180818\\09fe6368b8ea8192ad28c420dd5b9316.jpg', '1');
INSERT INTO `tp_employee` VALUES ('9', '10', '8', '2', '7', 'zqs43511', '张青山', '0f0201f583a90d5c64e73a8e8ce3ba9c', '/uploads/2018081819dee1bf7bc93772c6e133ff820f00ec.jpg', '1');
INSERT INTO `tp_employee` VALUES ('3', '5', '1', '6', '3', '人事001', 'HR1', 'e10adc3949ba59abbe56e057f20f883e', '', '1');
INSERT INTO `tp_employee` VALUES ('5', '10', '8', '2', '6', 'vvyng', '甘泳红', 'e10adc3949ba59abbe56e057f20f883e', '/uploads/20180906\\7ffbbb3b799f039e0cd6c6a334d55d40.jpg', '1');
INSERT INTO `tp_employee` VALUES ('6', '13', '1', '4', '8', 'ganyh', 'vvyng', 'e10adc3949ba59abbe56e057f20f883e', '', '1');
INSERT INTO `tp_employee` VALUES ('7', '7', '5', '6', '11', 'qihua001', '企划主管', 'e10adc3949ba59abbe56e057f20f883e', '', '1');
INSERT INTO `tp_employee` VALUES ('8', '10', '1', '1', '7', 'admin', '张三', '21232f297a57a5a743894a0e4a801fc3', '/uploads/20180906\\252f2a8b3ee39d4bc8e477b705a1fcac.jpg', '1');
INSERT INTO `tp_employee` VALUES ('11', '10', '9', '13', '22', '111', '111', '698d51a19d8a121ce581499d7b701668', '/uploads/20180907/c2d786c6197b7f870f5e5880571bbd8c.jpg', '1');

-- ----------------------------
-- Table structure for tp_position
-- ----------------------------
DROP TABLE IF EXISTS `tp_position`;
CREATE TABLE `tp_position` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT COMMENT '职位编号',
  `depart_id` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '部门编号',
  `position_name` varchar(30) NOT NULL COMMENT '职位名称',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态1启用2禁用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_position
-- ----------------------------
INSERT INTO `tp_position` VALUES ('2', '3', '销售主管', '1');
INSERT INTO `tp_position` VALUES ('3', '5', '人事主管', '1');
INSERT INTO `tp_position` VALUES ('22', '10', '普通开发', '1');
INSERT INTO `tp_position` VALUES ('5', '3', '销售专员', '2');
INSERT INTO `tp_position` VALUES ('6', '10', 'web前端工程师', '1');
INSERT INTO `tp_position` VALUES ('7', '10', 'PHP后台工程师', '1');
INSERT INTO `tp_position` VALUES ('8', '13', '行政专员', '1');
INSERT INTO `tp_position` VALUES ('9', '13', '行政主管', '1');
INSERT INTO `tp_position` VALUES ('10', '7', '企划专员', '1');
INSERT INTO `tp_position` VALUES ('11', '7', '企划主管', '1');
INSERT INTO `tp_position` VALUES ('23', '10', '普通开发', '1');

-- ----------------------------
-- Table structure for tp_roles
-- ----------------------------
DROP TABLE IF EXISTS `tp_roles`;
CREATE TABLE `tp_roles` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT COMMENT '角色编号',
  `role_name` varchar(30) NOT NULL COMMENT '角色名称',
  `role_rules` text COMMENT '角色权限',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态1正常2禁用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_roles
-- ----------------------------
INSERT INTO `tp_roles` VALUES ('1', '超级管理员', null, '1');
INSERT INTO `tp_roles` VALUES ('2', '技术总监', '1,2,10,11,15,19', '1');
INSERT INTO `tp_roles` VALUES ('4', '行政主管', '10,11,15,19,12,13,14,16,17,18,20,21,22', '1');
INSERT INTO `tp_roles` VALUES ('5', '市场主管', '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,44', '1');
INSERT INTO `tp_roles` VALUES ('6', '销售主管', '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22', '1');
INSERT INTO `tp_roles` VALUES ('7', '部门主管', '10,11,12,13,14,15,16,17,18,19,20,21,22', '1');
INSERT INTO `tp_roles` VALUES ('13', '普通开发', '10,11,15,19', '1');

-- ----------------------------
-- Table structure for tp_rules
-- ----------------------------
DROP TABLE IF EXISTS `tp_rules`;
CREATE TABLE `tp_rules` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT COMMENT '权限编号',
  `pid` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '上级权限编号',
  `rule_name` varchar(30) NOT NULL COMMENT '权限名称',
  `rule_address` varchar(30) DEFAULT NULL COMMENT '权限地址',
  `rule_icon` varchar(30) DEFAULT NULL COMMENT '权限图标',
  `is_menu` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否左侧菜单中显示0不显示1显示',
  `sort` tinyint(3) unsigned NOT NULL COMMENT '排序',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态1正常2禁用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_rules
-- ----------------------------
INSERT INTO `tp_rules` VALUES ('1', '0', '系统设置', '', 'cog', '1', '1', '1');
INSERT INTO `tp_rules` VALUES ('3', '1', '权限添加', 'rule/add', '', '0', '2', '1');
INSERT INTO `tp_rules` VALUES ('4', '1', '权限删除', 'rule/delete', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('5', '1', '权限修改', 'rule/edit', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('6', '1', '角色管理', 'role/index', '', '1', '2', '1');
INSERT INTO `tp_rules` VALUES ('7', '1', '角色添加', 'role/add', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('8', '1', '角色删除', 'role/delete', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('9', '1', '角色修改', 'role/edit', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('10', '0', '人员管理', '', 'users', '1', '1', '1');
INSERT INTO `tp_rules` VALUES ('11', '10', '部门管理', 'department/index', '', '1', '1', '1');
INSERT INTO `tp_rules` VALUES ('15', '10', '职位管理', 'position/index', '', '1', '1', '1');
INSERT INTO `tp_rules` VALUES ('19', '10', '员工管理', 'employee/index', '', '1', '1', '1');
INSERT INTO `tp_rules` VALUES ('2', '1', '权限管理', 'rule/index', null, '1', '2', '1');
INSERT INTO `tp_rules` VALUES ('12', '10', '部门添加', 'department/add', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('13', '10', '部门修改', 'department/edit', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('14', '10', '部门删除', 'department/delete', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('16', '10', '职位添加', 'position/add', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('17', '10', '职位修改', 'position/edit', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('18', '10', '职位删除', 'position/delete', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('20', '10', '员工添加', 'employee/add', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('21', '10', '员工修改', 'employee/edit', '', '2', '2', '1');
INSERT INTO `tp_rules` VALUES ('22', '10', '员工删除', 'employee/delete', '', '2', '2', '1');

-- ----------------------------
-- Table structure for tp_weekly
-- ----------------------------
DROP TABLE IF EXISTS `tp_weekly`;
CREATE TABLE `tp_weekly` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '周志编号',
  `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '提交人编号',
  `depart_id` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '部门编号',
  `position_id` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '职位编号',
  `leader_id` int(5) unsigned NOT NULL DEFAULT '0' COMMENT '直属领导编号',
  `title` varchar(50) NOT NULL COMMENT '周志标题',
  `content` text NOT NULL COMMENT '周志内容',
  `add_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '提交时间',
  `approval_user` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '审批人编号',
  `approval_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '审批时间',
  `approval_content` varchar(255) NOT NULL COMMENT '审批内容',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态0待审批1已审批2驳回',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_weekly
-- ----------------------------
