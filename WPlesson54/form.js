var MessageText = new Array();
MessageText[1]='Please select a valid date.\n';
MessageText[2]='Please select number of nights.\n';
MessageText[3]='Please enter at least one contact number.\n';
MessageText[5]='Please select your country of residence.\n';
MessageText[6]='Please enter your city of residence.\n';
MessageText[7]='Please select a valid salutation.\n';
MessageText[8]='Please enter your first name.\n';
MessageText[9]='Please enter your last name.\n';
MessageText[10]='Please enter an email address.\n';
MessageText[11]='Please enter a valid email address.\n';
MessageText[12]='Please select a valid destination.\n';
MessageText[13]='Please select an arrival date at least 5 days prior.\n';
MessageText[14]='Please enter a valid subject.\n';
MessageText[15]='Please enter a message describing your request.\n';
MessageText[16]='Please select a holiday destination.\n';
MessageText[17]='Please select a resort 1.\n';
MessageText[18]='Please select resort 1 room category.\n';
MessageText[19]='Please select resort 2 room category.\n';
MessageText[20]='Please select a resort from Sri Lanka.\n';
MessageText[21]='Please select Sri Lanka resort room category.\n';
MessageText[22]='Please select a resort from Maldives.\n';
MessageText[23]='Please select Maldives resort room category.\n';
MessageText[24]='Please specify your requirement/request or the places you would like to visit.\n';
MessageText[25]='Please select a valid arrival year.\n';
MessageText[26]='Please select a valid arrival month.\n';
MessageText[27]='Please select a valid arrival day.\n';
MessageText[28]='Please enter a valid arrival date.\n';
MessageText[30]='Please select holiday type/occasion.\n';
MessageText[31]='Please select number of room(s) required.\n';
MessageText[32]='Please select a holiday budget.\n';
MessageText[33]='Please enter your business name.\n';
MessageText[34]='Please select department you would like to contact.\n';
MessageText[35]='Please select holiday package.\n';
MessageText[36]='Please select title.\n';
MessageText[37]='Please enter your name.\n';
MessageText[38]='Please select checkIn date.\n';
MessageText[39]='Please select no of night(s).\n';
MessageText[40]='Please enter contact number.\n';
MessageText[41]='Please enter Security Code.\n';
MessageText[42]='Security Code invalid please try again\n';
//////////////////////////////////////////////////////////////////////////////////////////////////////
function PackageFormValidator(theForm){
	var Error='';

	var fldCustomerFormSubject=document.getElementsByName('fldCustomerFormSubject')[0].value;
	if (fldCustomerFormSubject==''){
		Error = Error + MessageText[34];
	}

	var ArrivalYear=document.getElementsByName('ArrivalYear')[0].value;
	var ArrivalMonth=document.getElementsByName('ArrivalMonth')[0].value;
	var ArrivalDay=document.getElementsByName('ArrivalDay')[0].value;
	var fldCustomerFormArrivalDate=ArrivalYear+'-'+ArrivalMonth+'-'+ArrivalDay;
	if ((ArrivalYear=='')||(ArrivalMonth=='')||(ArrivalDay=='')){
		Error = Error + MessageText[28];
	}else{
		var ArrivalDateA = ArrivalMonth + "/" + ArrivalDay + "/" + ArrivalYear;
		var ArrivalDate = new Date(ArrivalDateA);

		var currentDateA = new Date();
		var currentDateB = document.getElementsByName('currentMonth')[0].value + "/" + document.getElementsByName('currentDate')[0].value + "/" + document.getElementsByName('currentYear')[0].value;
		var currentDate = new Date(currentDateB);

		if(currentDate > ArrivalDate){
			Error = Error + MessageText[13];
		}
	}

	var fldCustomerFormNights=document.getElementsByName('fldCustomerFormNights')[0].value;
	if (fldCustomerFormNights==''){
		Error = Error + MessageText[2];
	}

	var fldCustomerFormRooms=document.getElementsByName('fldCustomerFormRooms')[0].value;
	var RoomPax='';
	if (fldCustomerFormRooms==''){
		Error = Error + MessageText[31];
	}else{
		var mycount=0;
		var fldCustomerFormRoomsAdult= new Array();
		var fldCustomerFormRoomsChild= new Array();
		var fldCustomerFormRoomsInfant= new Array();
		for (i_rooms = 0; i_rooms < fldCustomerFormRooms; i_rooms++) {
			mycount=mycount+1;
			fldCustomerFormRoomsAdult[mycount]=document.getElementsByName('fldCustomerFormRoomsAdult['+mycount+']')[0].value;
			fldCustomerFormRoomsChild[mycount]=document.getElementsByName('fldCustomerFormRoomsChild['+mycount+']')[0].value;
			fldCustomerFormRoomsInfant[mycount]=document.getElementsByName('fldCustomerFormRoomsInfant['+mycount+']')[0].value;
			if (fldCustomerFormRoomsAdult[mycount]==''){
				Error = Error + 'Please select Adult(s) for room '+mycount+'.\n';
			}
			if (fldCustomerFormRoomsChild[mycount]==''){
				Error = Error + 'Please select Child for room '+mycount+'. or select 0, if no Child\n';
			}
			if (fldCustomerFormRoomsInfant[mycount]==''){
				Error = Error + 'Please select Infant for room '+mycount+'. or select 0, if no Infant\n';
			}
			RoomPax=RoomPax + 'Room:'+mycount+','+'A'+fldCustomerFormRoomsAdult[mycount]+',C'+fldCustomerFormRoomsChild[mycount]+',I'+fldCustomerFormRoomsInfant[mycount];
		}
	}

	var fldCustomerFormTypeOFHoliday=document.getElementsByName('fldCustomerFormTypeOFHoliday')[0].value;
	if (fldCustomerFormTypeOFHoliday==''){
		Error = Error + MessageText[30];
	}

	var fldCustomerFormBudget=document.getElementsByName('fldCustomerFormBudget')[0].value;
	if (fldCustomerFormBudget==''){
		Error = Error + MessageText[32];
	}
	var fldCustomerFormResort1ID='';
	var fldCustomerFormResort1VillaID='';
	var fldCustomerFormResort2ID='';
	var fldCustomerFormResort2VillaID='';

	var fldCustomerTitle= document.getElementsByName('fldCustomerTitle')[0].value;
	var fldCustomerFName= document.getElementsByName('fldCustomerFName')[0].value;
	var fldCustomerLName= document.getElementsByName('fldCustomerLName')[0].value;
	var fldCustomerEMail=document.getElementsByName('fldCustomerEMail')[0].value;
	var fldCustomerCountryOfResidence= document.getElementsByName('fldCustomerCountryOfResidence')[0].value;
	var fldCustomerCityOfResidence= document.getElementsByName('fldCustomerCityOfResidence')[0].value;
	var fldCustomerMobilePhone=document.getElementsByName('fldCustomerMobilePhone')[0].value;
	var fldCustomerHomePhone=document.getElementsByName('fldCustomerHomePhone')[0].value;

	if (fldCustomerTitle==''){
		Error = Error + MessageText[7];
	}
	if (fldCustomerFName==''){
		Error = Error + MessageText[8];
	}
	if (fldCustomerLName==''){
		Error = Error + MessageText[9];
	}
	if (fldCustomerEMail==''){
		Error = Error + MessageText[10];
	}else{
		if (echeck(fldCustomerEMail)==false){
			Error = Error + MessageText[11];
		}
	}
	if (fldCustomerCountryOfResidence==''){
		Error = Error + MessageText[5];
	}
	if (fldCustomerCityOfResidence==''){
		Error = Error + MessageText[6];
	}
	if ((fldCustomerHomePhone)||(fldCustomerMobilePhone)){
		if (fldCustomerHomePhone){
			fldCustomerHomePhone= fldCustomerHomePhone;
		}
		if (fldCustomerMobilePhone){
			fldCustomerMobilePhone= fldCustomerMobilePhone;
		}
	}else{
		Error = Error + MessageText[3];
	}
	var fldCustomerFormMessage=document.getElementsByName('fldCustomerFormMessage')[0].value;
	if (fldCustomerFormMessage==''){
		Error = Error + MessageText[15];
	}
	if (Error){
		alert(Error);
		return (false);
	}else{
		document.getElementsByName('fldCustomerFName')[0].value				= MakeDBFriendlyDB(document.getElementsByName('fldCustomerFName')[0].value);
		document.getElementsByName('fldCustomerLName')[0].value				= MakeDBFriendlyDB(document.getElementsByName('fldCustomerLName')[0].value);
		document.getElementsByName('fldCustomerCityOfResidence')[0].value	= MakeDBFriendlyDB(document.getElementsByName('fldCustomerCityOfResidence')[0].value);
		document.getElementsByName('fldCustomerMobilePhone')[0].value		= MakeDBFriendlyDB(document.getElementsByName('fldCustomerMobilePhone')[0].value);
		document.getElementsByName('fldCustomerHomePhone')[0].value			= MakeDBFriendlyDB(document.getElementsByName('fldCustomerHomePhone')[0].value);
		document.getElementsByName('fldCustomerFormMessage')[0].value		= MakeDBFriendlyDB(document.getElementsByName('fldCustomerFormMessage')[0].value);
		return (true);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function InternalFormValidator(theForm){
	var Error='';
	document.getElementsByName('fldCustomerFName')[0].value				= MakeDBFriendlyDB(document.getElementsByName('fldCustomerFName')[0].value);
	document.getElementsByName('fldCustomerLName')[0].value				= MakeDBFriendlyDB(document.getElementsByName('fldCustomerLName')[0].value);
	document.getElementsByName('fldCustomerCityOfResidence')[0].value	= MakeDBFriendlyDB(document.getElementsByName('fldCustomerCityOfResidence')[0].value);
	document.getElementsByName('fldCustomerMobilePhone')[0].value		= MakeDBFriendlyDB(document.getElementsByName('fldCustomerMobilePhone')[0].value);
	document.getElementsByName('fldCustomerHomePhone')[0].value			= MakeDBFriendlyDB(document.getElementsByName('fldCustomerHomePhone')[0].value);
	document.getElementsByName('fldCustomerFormMessage')[0].value		= MakeDBFriendlyDB(document.getElementsByName('fldCustomerFormMessage')[0].value);

	if (document.getElementsByName('fldCustomerFormType')[0].value==''){
		Error = Error + 'Please select a form type.\n';
	}
	if (document.getElementsByName('fldCustomerFormType')[0].value==12 && document.getElementsByName('fldAgencyId')[0].value==''){
		Error = Error + 'Please select an agency.\n';
	}
	if (document.getElementsByName('fldCustomerFormType')[0].value==12 && document.getElementsByName('fldAgentId')[0].value==''){
		Error = Error + 'Please select an agent.\n';
	}
	if (document.getElementsByName('fldCustomerFName')[0].value==''){
		Error = Error + 'Please enter the first name.\n';
	}
	if (document.getElementsByName('fldCustomerEMail')[0].value==''){
		Error = Error + 'Please enter email address.\n';
	}
	if (Error){
		alert(Error);
		return (false);
	}else{
		return (true);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function Form_LoardTravelPeriod(){
	var ERROR='';
	document.getElementById('form_travelperiod').innerHTML = LodingImageNew;
	var ArrivalYear= document.getElementsByName('ArrivalYear')[0].value;
	var ArrivalMonth= document.getElementsByName('ArrivalMonth')[0].value;
	var ArrivalDay=document.getElementsByName('ArrivalDay')[0].value;
	var MyDay=ArrivalDay;
	if ((ArrivalYear=='')||(ArrivalMonth=='')||(ArrivalDay=='')){
		ERROR = ERROR + '<li>'+MessageText[1]+'</li>';
	}
	var fldCustomerFormNights= document.getElementsByName('fldCustomerFormNights')[0].value;
	if (fldCustomerFormNights==''){
		ERROR = ERROR + '<li>'+MessageText[2]+'</li>';
	}
	if (ERROR){
		document.getElementById('form_travelperiod').innerHTML = ERROR;
	}else{
		xmlHttp=GetXmlHttpObject();if (xmlHttp==null){alert("Your browser does not support AJAX!");return;}
		var url = 'ajax.form.php?Form_LoardTravelPeriod=Yes&fldCustomerFormNights='+fldCustomerFormNights+'&ArrivalDay='+MyDay+'&ArrivalYear='+ArrivalYear+'&ArrivalMonth='+ArrivalMonth;
		xmlHttp.onreadystatechange=LoadSubCommon;
		xmlHttp.open("POST",url,true);
		xmlHttp.send(null);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function Form_LoardRooms(){
	var fldCustomerFormRooms= document.getElementsByName('fldCustomerFormRooms')[0].value;
	var mytext='';
	mytext=mytext + '<table border="0" width="100%" cellspacing="0" cellpadding="2">';
		var mycount=0;
		for (i_rooms = 0; i_rooms < fldCustomerFormRooms; i_rooms++) {
			mycount=mycount+1;
			mytext=mytext + '<tr>';
			mytext=mytext + '	<td align="right"><b>Pax for room '+mycount+'</b></td>';
			mytext=mytext + '	<td>';
			mytext=mytext + '		<select size="1" name="fldCustomerFormRoomsAdult['+mycount+']" class="form_select" style="width: 80px">';
			mytext=mytext + '			<option value="">Adults</option>';
								for (i = 1; i < 6; i++) {
									mytext=mytext + '<option value="'+i+'">'+i+'</option>';
								}
			mytext=mytext + '		</select>';
			mytext=mytext + '	</td>';
			mytext=mytext + '	<td>';
			mytext=mytext + '		<select size="1" name="fldCustomerFormRoomsChild['+mycount+']" class="form_select" style="width: 70px">';
			mytext=mytext + '			<option value="">Child</option>';
								for (i = 0; i < 5; i++) {
									mytext=mytext + '<option value="'+i+'">'+i+'</option>';
								}
			mytext=mytext + '		</select>';
			mytext=mytext + '	</td>';
			mytext=mytext + '	<td>';
			mytext=mytext + '		<select size="1" name="fldCustomerFormRoomsInfant['+mycount+']" class="form_select" style="width: 70px">';
			mytext=mytext + '			<option value="">Infant</option>';
								for (i = 0; i < 5; i++) {
									mytext=mytext + '<option value="'+i+'">'+i+'</option>';
								}
			mytext=mytext + '		</select>';
			mytext=mytext + '	</td>';
			mytext=mytext + '</tr>';
		}
	mytext=mytext + '</table><br><br>';
	document.getElementById('form_rooms').innerHTML = mytext;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function Form_LoadVillas(ResortID,PrintLocation,VillaID){
	var ResortID= document.getElementsByName(''+ResortID+'')[0].value;
	document.getElementById('form_'+PrintLocation+'').innerHTML = LodingImageNew;
	xmlHttp=GetXmlHttpObject();if (xmlHttp==null){alert("Your browser does not support AJAX!");return;}
	var url = 'ajax.form.php?Form_LoadVillas=Yes&ResortID='+ResortID+'&PrintLocation='+PrintLocation+'&VillaID='+VillaID;
	xmlHttp.onreadystatechange=LoadSubCommon;
	xmlHttp.open("POST",url,true);
	xmlHttp.send(null);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function ReservationsFormValidator(theForm){
	var Error='';
	//var ArrivalYear=document.getElementsByName('ArrivalYear')[0].value;
	//var ArrivalMonth=document.getElementsByName('ArrivalMonth')[0].value;
	//var ArrivalDay=document.getElementsByName('ArrivalDay')[0].value;
	var fldCustomerFormArrivalDate=document.getElementsByName('fldCheckinDate')[0].value;
	
	if (fldCustomerFormArrivalDate==''){
		Error = Error + MessageText[28];
	}else{
		var ArrivalDateA = fldCustomerFormArrivalDate;
		var ArrivalDate = new Date(ArrivalDateA);

		var currentDateA = new Date();
		var currentDateB = document.getElementsByName('currentYear')[0].value + "-" + document.getElementsByName('currentMonth')[0].value + "-" + document.getElementsByName('currentDate')[0].value;
		var currentDate = new Date(currentDateB);

		if(currentDate > ArrivalDate){
			Error = Error + MessageText[13];
		}
	}
	var fldCheckinDate=document.getElementsByName('fldCheckinDate')[0].value;
	if (fldCheckinDate==''){
		Error = Error + MessageText[38];
	}

	var fldCustomerFormNights=document.getElementsByName('fldCustomerFormNights')[0].value;
	if (fldCustomerFormNights==''){
		Error = Error + MessageText[2];
	}

	var fldCustomerFormRooms=1;//document.getElementsByName('fldCustomerFormRooms')[0].value;
	var RoomPax='';
	if (fldCustomerFormRooms==''){
		Error = Error + MessageText[31];
	}else{
		var mycount=0;
		var fldCustomerFormRoomsAdult= new Array();
		var fldCustomerFormRoomsChild= new Array();
		var fldCustomerFormRoomsInfant= new Array();
		for (i_rooms = 0; i_rooms < fldCustomerFormRooms; i_rooms++) {
			mycount=mycount+1;
			fldCustomerFormRoomsAdult[mycount]=document.getElementsByName('fldCustomerFormRoomsAdult['+mycount+']')[0].value;
			fldCustomerFormRoomsChild[mycount]=document.getElementsByName('fldCustomerFormRoomsChild['+mycount+']')[0].value;
			fldCustomerFormRoomsInfant[mycount]=document.getElementsByName('fldCustomerFormRoomsInfant['+mycount+']')[0].value;
			if (fldCustomerFormRoomsAdult[mycount]==''){
				Error = Error + 'Please select Adult(s) for room '+mycount+'.\n';
			}
			if (fldCustomerFormRoomsChild[mycount]==''){
				Error = Error + 'Please select Child for room '+mycount+'. or select 0, if no Child\n';
			}
			if (fldCustomerFormRoomsInfant[mycount]==''){
				Error = Error + 'Please select Infant for room '+mycount+'.or select 0, if no Infant\n';
			}
			RoomPax=RoomPax + 'Room:'+mycount+','+'A'+fldCustomerFormRoomsAdult[mycount]+',C'+fldCustomerFormRoomsChild[mycount]+',I'+fldCustomerFormRoomsInfant[mycount];
		}
	}

	var fldCustomerFormTypeOFHoliday=document.getElementsByName('fldCustomerFormTypeOFHoliday')[0].value;
	/*if (fldCustomerFormTypeOFHoliday==''){
		Error = Error + MessageText[30];
	} */

	var fldCustomerFormBudget=document.getElementsByName('fldCustomerFormBudget')[0].value;
	/*if (fldCustomerFormBudget==''){
		Error = Error + MessageText[32];
	} */
	var fldCustomerFormResort1ID='';
	var fldCustomerFormResort1VillaID='';
	var fldCustomerFormResort2ID='';
	var fldCustomerFormResort2VillaID='';
	fldCustomerFormResort1ID=document.getElementsByName('fldCustomerFormResort1ID')[0].value;
	if (fldCustomerFormResort1ID==''){
		Error = Error + MessageText[17];
	}else{
		fldCustomerFormResort1VillaID=document.getElementsByName('fldCustomerFormResort1VillaID')[0].value;
		if (fldCustomerFormResort1VillaID==''){
			Error = Error + MessageText[18];
		}
	}
	fldCustomerFormResort2ID=document.getElementsByName('fldCustomerFormResort2ID')[0].value;
	if (fldCustomerFormResort2ID){
		fldCustomerFormResort2VillaID=document.getElementsByName('fldCustomerFormResort2VillaID')[0].value;
		if (fldCustomerFormResort2VillaID==''){
			Error = Error + MessageText[19];
		}
	}
	var fldCustomerTitle= document.getElementsByName('fldCustomerTitle')[0].value;
	var fldCustomerFName= document.getElementsByName('fldCustomerFName')[0].value;
	var fldCustomerLName= document.getElementsByName('fldCustomerLName')[0].value;
	var fldCustomerEMail=document.getElementsByName('fldCustomerEMail')[0].value;
	var fldCustomerCountryOfResidence= document.getElementsByName('fldCustomerCountryOfResidence')[0].value;
	//var fldCustomerCityOfResidence= document.getElementsByName('fldCustomerCityOfResidence')[0].value;
	var fldCustomerMobilePhone=document.getElementsByName('fldCustomerMobilePhone')[0].value;
	//var fldCustomerHomePhone=document.getElementsByName('fldCustomerHomePhone')[0].value;

	if (fldCustomerTitle==''){
		Error = Error + MessageText[7];
	}
	if (fldCustomerFName==''){
		Error = Error + MessageText[8];
	}
	if (fldCustomerLName==''){
		//Error = Error + MessageText[9];
	}
	if (fldCustomerEMail==''){
		Error = Error + MessageText[10];
	}else{
		if (echeck(fldCustomerEMail)==false){
			Error = Error + MessageText[11];
		}
	}
	if (fldCustomerCountryOfResidence==''){
		Error = Error + MessageText[5];
	}
	/*if (fldCustomerCityOfResidence==''){
		Error = Error + MessageText[6];
	}*/
	/*if ((fldCustomerHomePhone)||(fldCustomerMobilePhone)){
		if (fldCustomerHomePhone){
			fldCustomerHomePhone= fldCustomerHomePhone;
		}
		if (fldCustomerMobilePhone){
			fldCustomerMobilePhone= fldCustomerMobilePhone;
		}
	}else{
		Error = Error + MessageText[3];
	} */
	
	if (fldCustomerMobilePhone==''){
			Error = Error + MessageText[3];
	}
	var fldCustomerFormMessage=document.getElementsByName('fldCustomerFormMessage')[0].value;
	if (fldCustomerFormMessage==''){
		//Error = Error + MessageText[15];
	}
	if (Error){
		alert(Error);
		return (false);
	}else{
		document.getElementsByName('fldCustomerFName')[0].value				= MakeDBFriendlyDB(document.getElementsByName('fldCustomerFName')[0].value);
		document.getElementsByName('fldCustomerLName')[0].value				= MakeDBFriendlyDB(document.getElementsByName('fldCustomerLName')[0].value);
		document.getElementsByName('fldCustomerCityOfResidence')[0].value	= MakeDBFriendlyDB(document.getElementsByName('fldCustomerCityOfResidence')[0].value);
		document.getElementsByName('fldCustomerMobilePhone')[0].value		= MakeDBFriendlyDB(document.getElementsByName('fldCustomerMobilePhone')[0].value);
		document.getElementsByName('fldCustomerHomePhone')[0].value			= MakeDBFriendlyDB(document.getElementsByName('fldCustomerHomePhone')[0].value);
		document.getElementsByName('fldCustomerFormMessage')[0].value		= MakeDBFriendlyDB(document.getElementsByName('fldCustomerFormMessage')[0].value);
		return (true);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function ContactUsFormValidator(theForm){
	var Error='';
	var fldCustomerTitle= document.getElementsByName('fldCustomerTitle')[0].value;
	var fldCustomerFName= document.getElementsByName('fldCustomerFName')[0].value;
	var fldCustomerLName= '';
	var fldCustomerEMail=document.getElementsByName('fldCustomerEMail')[0].value;
	var fldCustomerCountryOfResidence= document.getElementsByName('fldCustomerCountryOfResidence')[0].value;
	var fldCustomerCityOfResidence= '';
	var fldCustomerMobilePhone=document.getElementsByName('fldCustomerMobilePhone')[0].value;
	var fldCustomerHomePhone=document.getElementsByName('fldCustomerHomePhone')[0].value;

	if (fldCustomerTitle==''){
		Error = Error + MessageText[7];
	}
	if (fldCustomerFName==''){
		Error = Error + MessageText[37];
	}
	/*if (fldCustomerLName==''){
		Error = Error + MessageText[9];
	} */
	if (fldCustomerEMail==''){
		Error = Error + MessageText[10];
	}else{
		if (echeck(fldCustomerEMail)==false){
			Error = Error + MessageText[11];
		}
	}
	if (fldCustomerCountryOfResidence==''){
		Error = Error + MessageText[5];
	}
	/*if (fldCustomerCityOfResidence==''){
		Error = Error + MessageText[6];
	}*/
	if ((fldCustomerHomePhone)||(fldCustomerMobilePhone)){
		if (fldCustomerHomePhone){
			fldCustomerHomePhone= fldCustomerHomePhone;
		}
		if (fldCustomerMobilePhone){
			fldCustomerMobilePhone= fldCustomerMobilePhone;
		}
	}else{
		Error = Error + MessageText[3];
	}
	var fldCustomerFormMessage=document.getElementsByName('fldCustomerFormMessage')[0].value;
	if (fldCustomerFormMessage==''){
		Error = Error + MessageText[15];
	}
	if (Error){
		alert(Error);
		return (false);
	}else{
		document.getElementsByName('fldCustomerFName')[0].value				=MakeDBFriendlyDB(document.getElementsByName('fldCustomerFName')[0].value);
		document.getElementsByName('fldCustomerLName')[0].value				=MakeDBFriendlyDB(document.getElementsByName('fldCustomerLName')[0].value);
		document.getElementsByName('fldCustomerCityOfResidence')[0].value	=MakeDBFriendlyDB(document.getElementsByName('fldCustomerCityOfResidence')[0].value);
		document.getElementsByName('fldCustomerMobilePhone')[0].value		=MakeDBFriendlyDB(document.getElementsByName('fldCustomerMobilePhone')[0].value);
		document.getElementsByName('fldCustomerHomePhone')[0].value			=MakeDBFriendlyDB(document.getElementsByName('fldCustomerHomePhone')[0].value);
		document.getElementsByName('fldCustomerFormMessage')[0].value		=MakeDBFriendlyDB(document.getElementsByName('fldCustomerFormMessage')[0].value);
		return (true);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function ContactUsFormValidatorTest(theForm){
	var Error='';
	var fldCustomerTitle= document.getElementsByName('fldCustomerTitle')[0].value;
	var fldCustomerFName= document.getElementsByName('fldCustomerFName')[0].value;
	var fldCustomerLName= '';
	var fldCustomerEMail=document.getElementsByName('fldCustomerEMail')[0].value;
	var fldCustomerCountryOfResidence= document.getElementsByName('fldCustomerCountryOfResidence')[0].value;
	var fldCustomerCityOfResidence= '';
	var fldCustomerMobilePhone=document.getElementsByName('fldCustomerMobilePhone')[0].value;
	var fldCustomerHomePhone=document.getElementsByName('fldCustomerHomePhone')[0].value;
	var captcha_code_input=document.getElementsByName('captcha_code_input')[0].value;

	if (fldCustomerTitle==''){
		Error = Error + MessageText[7];
	}
	if (fldCustomerFName==''){
		Error = Error + MessageText[37];
	}
	/*if (fldCustomerLName==''){
		Error = Error + MessageText[9];
	} */
	if (fldCustomerEMail==''){
		Error = Error + MessageText[10];
	}else{
		if (echeck(fldCustomerEMail)==false){
			Error = Error + MessageText[11];
		}
	}
	if (fldCustomerCountryOfResidence==''){
		Error = Error + MessageText[5];
	}
	/*if (fldCustomerCityOfResidence==''){
		Error = Error + MessageText[6];
	}*/
	if ((fldCustomerHomePhone)||(fldCustomerMobilePhone)){
		if (fldCustomerHomePhone){
			fldCustomerHomePhone= fldCustomerHomePhone;
		}
		if (fldCustomerMobilePhone){
			fldCustomerMobilePhone= fldCustomerMobilePhone;
		}
	}else{
		Error = Error + MessageText[3];
	}
	var fldCustomerFormMessage=document.getElementsByName('fldCustomerFormMessage')[0].value;
	if (fldCustomerFormMessage==''){
		Error = Error + MessageText[15];
	}
	
	if(captcha_code_input==''){
	    Error = Error + MessageText[41];
	}
	else{
	    $.ajax({
            type: "POST",
            url: "/captchaVerify.php",
            dataType: "json",
            data: {captcha_code_input:captcha_code_input},
            success : function(data){
                if (data.code == "200"){
                    //alert("Success: " +data.msg);
                } else {
                    Error = Error + MessageText[42];
                }
            }
        });
	}
	
	
	if (Error){
		alert(Error);
		return (false);
	}else{
		document.getElementsByName('fldCustomerFName')[0].value				=MakeDBFriendlyDB(document.getElementsByName('fldCustomerFName')[0].value);
		document.getElementsByName('fldCustomerLName')[0].value				=MakeDBFriendlyDB(document.getElementsByName('fldCustomerLName')[0].value);
		document.getElementsByName('fldCustomerCityOfResidence')[0].value	=MakeDBFriendlyDB(document.getElementsByName('fldCustomerCityOfResidence')[0].value);
		document.getElementsByName('fldCustomerMobilePhone')[0].value		=MakeDBFriendlyDB(document.getElementsByName('fldCustomerMobilePhone')[0].value);
		document.getElementsByName('fldCustomerHomePhone')[0].value			=MakeDBFriendlyDB(document.getElementsByName('fldCustomerHomePhone')[0].value);
		document.getElementsByName('fldCustomerFormMessage')[0].value		=MakeDBFriendlyDB(document.getElementsByName('fldCustomerFormMessage')[0].value);
		return (true);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function AskQuoteFormValidator(theForm){
	var Error='';
	var fldCustomerTitle= document.getElementsByName('fldCustomerTitle_Aqm')[0].value;
	var fldCustomerFName= document.getElementsByName('fldCustomerFName_Aqm')[0].value;
	
	var fldCustomerEMail=document.getElementsByName('fldCustomerEMail_Aqm')[0].value;
	var fldCustomerCountryOfResidence= document.getElementsByName('fldCustomerCountryOfResidence_Aqm')[0].value;
	
//	var fldCustomerMobilePhone=document.getElementsByName('fldCustomerMobilePhone_Aqm')[0].value;
	var fldCustomerFormMessage=document.getElementsByName('fldCustomerFormMessage_Aqm')[0].value;
	

	if (fldCustomerTitle==''){
		Error = Error + MessageText[7];
	}
	if (fldCustomerFName==''){
		Error = Error + MessageText[8];
	}
	if (fldCustomerEMail==''){
		Error = Error + MessageText[10];
	}else{
		if (echeck(fldCustomerEMail)==false){
			Error = Error + MessageText[11];
		}
	}
	if (fldCustomerCountryOfResidence==''){
		Error = Error + MessageText[5];
	}
//	if (fldCustomerMobilePhone){
//		fldCustomerMobilePhone= fldCustomerMobilePhone;
//	}else{
//		Error = Error + MessageText[3];
//	}
	
	
	if (Error){
		alert(Error);
		return (false);
	}else{
		
		return (true);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function QuickFormValidator(theForm){
	var Error='';
	var fldCustomerFName= document.getElementsByName('fldCustomerFName')[0].value;
	var fldCustomerEMail=document.getElementsByName('fldCustomerEMail')[0].value;
	var fldCustomerCountryOfResidence= document.getElementsByName('fldCustomerCountryOfResidence')[0].value;
	var fldCustomerMobilePhone=document.getElementsByName('fldCustomerMobilePhone')[0].value;
	var fldCustomerFormMessage=document.getElementsByName('fldCustomerFormMessage')[0].value;

	if (fldCustomerFName==''){
		Error = Error + MessageText[8];
	}
	if (fldCustomerEMail==''){
		Error = Error + MessageText[10];
	}else{
		if (echeck(fldCustomerEMail)==false){
			Error = Error + MessageText[11];
		}
	}
	if (fldCustomerCountryOfResidence==''){
		Error = Error + MessageText[5];
	}
	if (fldCustomerMobilePhone==''){
		Error = Error + MessageText[3];
	}
	if (fldCustomerFormMessage==''){
		Error = Error + MessageText[15];
	}
	if (Error){
		alert(Error);
		return (false);
	}else{
		document.getElementsByName('fldCustomerFName')[0].value			= MakeDBFriendlyDB(document.getElementsByName('fldCustomerFName')[0].value);
		document.getElementsByName('fldCustomerEMail')[0].value			= MakeDBFriendlyDB(document.getElementsByName('fldCustomerEMail')[0].value);
		document.getElementsByName('fldCustomerMobilePhone')[0].value	= MakeDBFriendlyDB(document.getElementsByName('fldCustomerMobilePhone')[0].value);
		document.getElementsByName('fldCustomerFormMessage')[0].value	= MakeDBFriendlyDB(document.getElementsByName('fldCustomerFormMessage')[0].value);
		return (true);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function QuickCheckAvailabilityFormValidator(theForm){
	var Error='';

	var ArrivalYear=document.getElementsByName('ArrivalYear')[0].value;
	var ArrivalMonth=document.getElementsByName('ArrivalMonth')[0].value;
	var ArrivalDay=document.getElementsByName('ArrivalDay')[0].value;
	var fldCustomerFormArrivalDate=ArrivalYear+'-'+ArrivalMonth+'-'+ArrivalDay;
	if ((ArrivalYear=='')||(ArrivalMonth=='')||(ArrivalDay=='')){
		Error = Error + MessageText[28];
	}else{
		var ArrivalDateA = ArrivalMonth + "/" + ArrivalDay + "/" + ArrivalYear;
		var ArrivalDate = new Date(ArrivalDateA);

		var currentDateA = new Date();
		var currentDateB = document.getElementsByName('currentMonth')[0].value + "/" + document.getElementsByName('currentDate')[0].value + "/" + document.getElementsByName('currentYear')[0].value;
		var currentDate = new Date(currentDateB);

		if(currentDate > ArrivalDate){
			Error = Error + MessageText[13];
		}
	}

	var fldCustomerFormNights=document.getElementsByName('fldCustomerFormNights')[0].value;
	if (fldCustomerFormNights==''){
		Error = Error + MessageText[2];
	}


	var fldCustomerFName= document.getElementsByName('fldCustomerFName')[0].value;
	var fldCustomerEMail=document.getElementsByName('fldCustomerEMail')[0].value;
	var fldCustomerCountryOfResidence= document.getElementsByName('fldCustomerCountryOfResidence')[0].value;
	var fldCustomerMobilePhone=document.getElementsByName('fldCustomerMobilePhone')[0].value;


	if (fldCustomerFName==''){
		Error = Error + MessageText[8];
	}
	if (fldCustomerEMail==''){
		Error = Error + MessageText[10];
	}else{
		if (echeck(fldCustomerEMail)==false){
			Error = Error + MessageText[11];
		}
	}
	if (fldCustomerCountryOfResidence==''){
		Error = Error + MessageText[5];
	}
	if (fldCustomerMobilePhone==''){
		Error = Error + MessageText[3];
	}

	if (Error){
		alert(Error);
		return (false);
	}else{
		document.getElementsByName('fldCustomerFName')[0].value			=MakeDBFriendlyDB(document.getElementsByName('fldCustomerFName')[0].value);
		document.getElementsByName('fldCustomerMobilePhone')[0].value	=MakeDBFriendlyDB(document.getElementsByName('fldCustomerMobilePhone')[0].value);
		return (true);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
function QuickQuoteRequestNowValidator(theForm){
	var Error='';
	var fldCustomerTitle= document.getElementsByName('fldCustomerTitle')[0].value;
	var fldCustomerFName=document.getElementsByName('fldCustomerFName')[0].value;
//	var fldCustomerMobilePhone= document.getElementsByName('fldCustomerMobilePhone')[0].value;
	var fldCustomerEMail=document.getElementsByName('fldCustomerEMail')[0].value;
	var fldCustomerCountryOfResidence=document.getElementsByName('fldCustomerCountryOfResidence')[0].value;
	var fldCheckinDate=document.getElementsByName('fldCheckinDate')[0].value;
	var fldCustomerFormNights=document.getElementsByName('fldCustomerFormNights')[0].value;
	

	if (fldCustomerTitle==''){
		Error = Error + MessageText[36];
	}
	if (fldCustomerFName==''){
		Error = Error + MessageText[37];
	}
//	if (fldCustomerMobilePhone==''){
//		Error = Error + MessageText[3];
//	}
	if (fldCustomerEMail==''){
		Error = Error + MessageText[10];
	}else{
		if (echeck(fldCustomerEMail)==false){
			Error = Error + MessageText[11];
		}
	}
	if (fldCustomerCountryOfResidence==''){
		Error = Error + MessageText[5];
	}
	if (fldCheckinDate==''){
		Error = Error + MessageText[38];
	}
	if (fldCustomerFormNights==''){
		Error = Error + MessageText[39];
	}
	if (Error){
		alert(Error);
		return (false);
	}else{
		
		return (true);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////
function offerRequestValidatorNew(theForm){
	var Error='';
	var fldCustomerTitle= document.getElementsByName('fldCustomerTitle')[0].value;
	var fldCustomerFName=document.getElementsByName('fldCustomerFName')[0].value;
	var fldCustomerMobilePhone= document.getElementsByName('fldCustomerMobilePhone')[0].value;
	var fldCustomerEMail=document.getElementsByName('fldCustomerEMail')[0].value;
	var fldCustomerCountryOfResidence=document.getElementsByName('fldCustomerCountryOfResidence')[0].value;
	var fldCheckinDate=document.getElementsByName('fldCheckinDate')[0].value;
	var fldCustomerFormNights=document.getElementsByName('fldCustomerFormNights')[0].value;
	var fldCustomerFormRoomsAdult=document.getElementsByName('fldCustomerFormRoomsAdult[1]')[0].value;
	var fldCustomerFormRoomsChild=document.getElementsByName('fldCustomerFormRoomsChild[1]')[0].value;
	var fldCustomerFormRoomsInfant=document.getElementsByName('fldCustomerFormRoomsInfant[1]')[0].value;
	
    if (fldCustomerFormRoomsAdult==''){
		Error = Error + 'Please select Adult(s) for reservation.\n';
	}
	if (fldCustomerFormRoomsChild==''){
		Error = Error + 'Please select Child for reservation. or select 0, if no Child\n';
	}
	if (fldCustomerFormRoomsInfant==''){
		Error = Error + 'Please select Infant for reservation.or select 0, if no Infant\n';
	}

	if (fldCustomerTitle==''){
		Error = Error + MessageText[36];
	}
	if (fldCustomerFName==''){
		Error = Error + MessageText[37];
	}
	
	if (fldCustomerEMail==''){
		Error = Error + MessageText[10];
	}else{
		if (echeck(fldCustomerEMail)==false){
			Error = Error + MessageText[11];
		}
	}
	if (fldCustomerCountryOfResidence==''){
		Error = Error + MessageText[5];
	}
	if (fldCheckinDate==''){
		Error = Error + MessageText[38];
	}
	if (fldCustomerFormNights==''){
		Error = Error + MessageText[39];
	}
	if (Error){
		alert(Error);
		return (false);
	}else{
		
		return (true);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////