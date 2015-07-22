<?php include 'header.php';?>


        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12"></div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                    
                        <div class="panel-form">
                            <div class="row"><!-- /.col-lg-6 (nested) -->
                                <div class="col-lg-offset-3 col-lg-6">
                                <h1 class="page-header">Solve</h1>
								<P>My Tag Line for Solve</P>
							<!-- Begin app -->
								<div ng-app>
								<div ng-controller="MyController">
                                    <form role="form">
                                        <div class="form-group input-group">
                                            <span class="input-group-addon">#</span>
                                            <input type="search" class="form-control" ng-model="search" placeholder="Hash Tag what you need to Solve">
                                        </div>
                                        
                                        </div>
                                    </form>
									    <ul>
											<li ng-repeat="name in names | filter:filterBySearch">
											{{ name }}
											</li>
										</ul>
								</div>
							</div>	
							<!-- end app -->
                                </div>
                                <!-- /.col-lg-6 (nested) -->
                            </div>
                            <!-- /.row (nested) -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
	<!-- App Controllers -->
	<script src="/js/app.js"></script>
<?php include 'footer.php';?>
