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
                            <div class="row">
            <!-- /.col-lg-6 (nested) -->
                                <div class="col-lg-offset-3 col-lg-6">
                                <h1 class="page-header">Solve</h1>
								<P>My Tag Line for Solve</P>
			<!-- Begin app -->
								<div ng-app="Slist">
    								<div ng-controller="MainCtrl">
                                  
                                        <div class="form-group input-group">
                                            <span class="input-group-addon">#</span>
                                            <input type="search" class="form-control" ng-model="tags" placeholder="Hash Tag what you need to Solve">
                                    </div>
                                        
                                
                
        			<ul>
            				<div ng-repeat="article in articles | filter:tag">
            				<a href="profiles/{{article.uid}}.php"> <img src="{{article.img}}" alt"{{article.name}}"  class="img-rounded" height="100" width="100">
                					<h3>{{article.name}}</h3> </a>
      
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
            <!-- /.panel-form -->
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
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular.min.js"></script>
 <script src="../js/app.js"></script>

<?php include 'footer.php';?>
