// JavaScript Document

function TazForm_LoadRooms(){
	var fldCustomerFormRooms= document.getElementsByName('fldCustomerFormRooms')[0].value;
	var mytext='';
	
	mytext=mytext + ' <div id="repeatNoPax">';
	
		var mycount=0;
		
		for (i_rooms = 0; i_rooms < fldCustomerFormRooms; i_rooms++) {
			mycount=mycount+1;
			mytext=mytext + ' <div class="form-group">';
			mytext=mytext + '<label for="fldCustomerFormRoomsAdult[1]" class="col-sm-4 control-label"><b>Pax for room '+mycount+'</b></label>';
			
			
			
			
			mytext=mytext + '	<div class="col-sm-4">';
			mytext=mytext + '	<select size="1" name="fldCustomerFormRoomsAdult['+mycount+']" class="form_select form-control">';
			
			mytext=mytext + '	<option value="">Adults</option>';
			
								for (i = 1; i < 6; i++) {
									mytext=mytext + '<option value="'+i+'">'+i+'</option>';
								}
			mytext=mytext + '		</select>';
			mytext=mytext + '	</div>';
			
			
			
			
			
		    mytext=mytext + '	<div class="col-sm-4">';
			
			mytext=mytext + '	<select size="1" name="fldCustomerFormRoomsChild['+mycount+']" class="form_select form-control">';

			mytext=mytext + '	<option value="">Child</option>';

								for (i = 0; i < 5; i++) {
									mytext=mytext + '<option value="'+i+'">'+i+'</option>';
								}
			mytext=mytext + '	</select>';
			
			
			mytext=mytext + '	 </div><!---//.col-sm-4 ends ------>';
			mytext=mytext + '	  </div><!---//.form-group ends ------>';
			
			
			
			
		
			
			
			
			
				mytext=mytext + '	<div class="form-group">';
    mytext=mytext + '   <label for="fldCustomerFormRoomsInfant[1]" class="col-sm-4 control-label"></label>';
    mytext=mytext + '   <div class="col-sm-8">';
			mytext=mytext + '		<select size="1" name="fldCustomerFormRoomsInfant['+mycount+']" class="form_select form-control">';
			mytext=mytext + '			<option value="">Infant</option>';
								for (i = 0; i < 5; i++) {
									mytext=mytext + '<option value="'+i+'">'+i+'</option>';
								}
			mytext=mytext + '		</select>';
			
			mytext=mytext + '	</div><!---//.col-sm-8 ends ------>';
			mytext=mytext + '	</div><!---//.form-group ends ------>';
			
				
		}
	mytext=mytext + '</div><!----/repeatNoPax---->';
	
	document.getElementById('form_rooms').innerHTML = mytext;
}


