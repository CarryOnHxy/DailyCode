<?php if (!defined('THINK_PATH')) exit(); /*a:7:{s:66:"D:\wamp64\www\tp5\public/../application/index\view\role\index.html";i:1536291087;s:57:"D:\wamp64\www\tp5\application\index\view\common\head.html";i:1536111014;s:59:"D:\wamp64\www\tp5\application\index\view\common\navbar.html";i:1536303186;s:60:"D:\wamp64\www\tp5\application\index\view\common\sidebar.html";i:1536305183;s:61:"D:\wamp64\www\tp5\application\index\view\common\settings.html";i:1536110104;s:59:"D:\wamp64\www\tp5\application\index\view\common\footer.html";i:1536109867;s:55:"D:\wamp64\www\tp5\application\index\view\common\js.html";i:1536199130;}*/ ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<meta charset="utf-8"/>
	<title>角色管理</title>
	<meta name="keywords" content="关键词"/>
	<meta name="description" content="网站描述"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
	<link rel="stylesheet" href="/static/css/bootstrap.css"/>
	<link rel="stylesheet" href="/static/css/font-awesome.css"/>
	<link rel="stylesheet" href="/static/css/jquery-ui.css"/>
	<link rel="stylesheet" href="/static/css/ace-fonts.css"/>
	<link rel="stylesheet" href="/static/css/ace.css" class="ace-main-stylesheet" id="main-ace-style"/>
	<script src="/static/js/ace-extra.js"></script>
	<script src="/static/js/jquery.js"></script>
</head>
<body class="no-skin">
		<div id="navbar" class="navbar navbar-default">
		<div class="navbar-container" id="navbar-container">
			<button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
				<span class="sr-only">Toggle sidebar</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<div class="navbar-header pull-left">
				<a href="index.html" class="navbar-brand">
					<small><i class="fa fa-home"></i>优乐选</small>
				</a>
			</div>
			<div class="navbar-buttons navbar-header pull-right" role="navigation">
				<ul class="nav ace-nav">
					<li class="red">
						<a href="#" title="前台首页" target="_blank">
							<i class="ace-icon fa fa-home"></i>
						</a>
					</li>
					<li class="light-blue">
						<a data-toggle="dropdown" href="#" class="dropdown-toggle">
							<img class="nav-user-photo" src="/static/images/user.png" alt="admin" />
							<span class="user-info">
							<small>欢迎光临</small>admin</span><i class="ace-icon fa fa-caret-down"></i>
						</a>
						<ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
							<li>
								<a href="info.html"><i class="ace-icon fa fa-user"></i>个人资料</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="<?php echo url('login/loginout'); ?>"><i class="ace-icon fa fa-power-off"></i>退出</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="main-container" id="main-container">
			<div id="sidebar" class="sidebar responsive">
			<div class="sidebar-shortcuts" id="sidebar-shortcuts">
				<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
					<button class="btn btn-success">
						<i class="ace-icon fa fa-signal"></i>
					</button>
					<button class="btn btn-info">
						<i class="ace-icon fa fa-pencil"></i>
					</button>
					<button class="btn btn-warning">
						<i class="ace-icon fa fa-users"></i>
					</button>
					<button class="btn btn-danger">
						<i class="ace-icon fa fa-cogs"></i>
					</button>
				</div>
				<div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
					<span class="btn btn-success"></span>
					<span class="btn btn-info"></span>
					<span class="btn btn-warning"></span>
					<span class="btn btn-danger"></span>
				</div>
			</div>
			<ul class="nav nav-list">
				<li class="active">
					<a href="index.html">
						<i class="menu-icon fa fa-tachometer"></i>
						<span class="menu-text">控制台</span>
					</a>
					<b class="arrow"></b>
				</li>
					<!-- 遍历权限规则数组 动态显示 -->
				<?php if(is_array($ruletree) || $ruletree instanceof \think\Collection || $ruletree instanceof \think\Paginator): if( count($ruletree)==0 ) : echo "" ;else: foreach($ruletree as $key=>$tree): ?>
				<li>
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-<?php echo $tree['rule_icon']; ?>"></i>
						<span class="menu-text"><?php echo $tree['rule_name']; ?></span>
						<b class="arrow fa fa-angle-down"></b>
					</a>
					<b class="arrow"></b>
					<ul class="submenu">
						<?php if(is_array($tree['child']) || $tree['child'] instanceof \think\Collection || $tree['child'] instanceof \think\Paginator): if( count($tree['child'])==0 ) : echo "" ;else: foreach($tree['child'] as $key=>$val): ?>
						<li>
							<a id="" href="<?php echo $val['url']; ?>"><i class="menu-icon fa fa-user"></i><?php echo $val['rule_name']; ?></a>
							<b class="arrow"></b>
						</li>
						<?php endforeach; endif; else: echo "" ;endif; ?>
					</ul>
				</li>
				<?php endforeach; endif; else: echo "" ;endif; ?>
				<li>
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-user"></i>
						<span class="menu-text">个人中心</span>
						<b class="arrow fa fa-angle-down"></b>
					</a>
					<b class="arrow"></b>
					<ul class="submenu">
						<li>
							<a href="#"><i class="menu-icon fa fa-user"></i>个人资料</a>
							<b class="arrow"></b>
						</li>
						<li>
							<a href="#"><i class=""></i>退出</a>
							<b class="arrow"></b>
						</li>                    
					</ul>
				</li>
			</ul>
			<div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
				<i class="ace-icon fa fa-angle-double-left" data-icon1="ace-icon fa fa-angle-double-left"
				data-icon2="ace-icon fa fa-angle-double-right"></i>
			</div>
			</div>
		<div class="main-content">
			<div class="main-content-inner">
				<div class="breadcrumbs" id="breadcrumbs">
					<ul class="breadcrumb">
						<li>
							<i class="ace-icon fa fa-home home-icon"></i>
							<a href="/">首页</a>
						</li>
						<li>
							<a href="<?php echo url('role/index'); ?>">角色管理</a>
						</li>
						<li class="active">角色列表</li>
					</ul>
				</div>
				<div class="page-content">
							<div class="ace-settings-container" id="ace-settings-container">
						<div class="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">
							<i class="ace-icon fa fa-cog bigger-130"></i>
						</div>
						<div class="ace-settings-box clearfix" id="ace-settings-box">
							<div class="pull-left width-50">
								<div class="ace-settings-item">
									<div class="pull-left">
										<select id="skin-colorpicker" class="hide">
											<option data-skin="no-skin" value="#438EB9">#438EB9</option>
											<option data-skin="skin-1" value="#222A2D">#222A2D</option>
											<option data-skin="skin-2" value="#C6487E">#C6487E</option>
											<option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
										</select>
									</div>
									<span>&nbsp; 选择皮肤</span>
								</div>
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-navbar"/>
									<label class="lbl" for="ace-settings-navbar"> 固定导航条</label>
								</div>
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-sidebar"/>
									<label class="lbl" for="ace-settings-sidebar"> 固定侧边栏</label>
								</div>
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-breadcrumbs"/>
									<label class="lbl" for="ace-settings-breadcrumbs"> 固定面包屑</label>
								</div>
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-rtl"/>
									<label class="lbl" for="ace-settings-rtl"> 切换至左边</label>
								</div>
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-add-container"/>
									<label class="lbl" for="ace-settings-add-container">切换宽窄度</label>
								</div>
							</div>
							<div class="pull-left width-50">
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-hover"/>
									<label class="lbl" for="ace-settings-hover"> 子菜单收起</label>
								</div>
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-compact"/>
									<label class="lbl" for="ace-settings-compact"> 侧边栏紧凑</label>
								</div>
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-highlight"/>
									<label class="lbl" for="ace-settings-highlight"> 当前位置</label>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12">
							<div class="row">
								<div class="cf">
									<a class="btn btn-info" href="<?php echo url('role/add'); ?>">新增</a>
								</div>
								<div class="space-4"></div>
								<table class="table table-striped table-bordered table-hover">
										<thead>
											<tr>
												<th>ID</th>
												<th>角色名称</th>
												<th>状态</th>
												<th class="center">操作</th>
											</tr>
										</thead>
										<tbody>
											<?php if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): if( count($list)==0 ) : echo "" ;else: foreach($list as $key=>$val): ?>
											<tr>
											
												<td><?php echo $val['id']; ?></td>
												<td><?php echo $val['role_name']; ?></td>
												<td><?php echo $val['status']==1?'启用' : '禁用'; ?></td>
												<td class="center">
													<?php if($val['id'] != 1): ?>
													<a href="<?php echo url('role/edit',array('id'=>$val['id'])); ?>" class="btn btn-primary">修改</a>
													<a href="javascript:;" onclick="del(this)"
													data-id="<?php echo $val['id']; ?>" 
													class="btn btn-danger">删除</a>
													<?php else: ?>
													<a href="">超级管理员不允许删除</a>
													<?php endif; ?>
												</td>
											</tr>
											<?php endforeach; endif; else: echo "" ;endif; ?>
										</tbody>
									</table>
							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			<div class="footer">
			<div class="footer-inner">
				<div class="footer-content">
					<span class="bigger-120">
					<small>Copyright &copy; 2017 ujiuye All Rights Reserved.</small>
					</span>
				</div>
			</div>
		</div>
		<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
			<i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
		</a>
	</div>
		<script src="/static/js/bootstrap.js"></script>
	<script src="/static/js/bootbox.js"></script>
	<script src="/static/js/ace/elements.scroller.js"></script>
	<script src="/static/js/ace/elements.colorpicker.js"></script>
	<script src="/static/js/ace/elements.aside.js"></script>
	<script src="/static/js/ace/ace.js"></script>
	<script src="/static/js/ace/ace.touch-drag.js"></script>
	<script src="/static/js/ace/ace.sidebar.js"></script>
	<script src="/static/js/ace/ace.sidebar-scroll-1.js"></script>
	<script src="/static/js/ace/ace.submenu-hover.js"></script>
	<script src="/static/js/ace/ace.widget-box.js"></script>
	<script src="/static/js/ace/ace.settings.js"></script>
	<script src="/static/js/ace/ace.settings-rtl.js"></script>
	<script src="/static/js/ace/ace.settings-skin.js"></script>
	<script src="/static/js/jquery-ui.js"></script>
	<script src="/static/js/layer/layer.js"></script>

	<script type="text/javascript">
		function del(obj){
			var id = $(obj).attr('data-id');
			layer.confirm('确定要删除此角色吗？删除后将不可恢复',function(){
				$.post('<?php echo url("role/delete"); ?>',{id:id},function(res){
					if(res.code == 1){
						layer.alert(res.msg,{icon:1},function(index){
							$(obj).parents('tr').remove();
							layer.close(index);
						});
					}
				});
			});
		}
	</script>
</body>
</html>