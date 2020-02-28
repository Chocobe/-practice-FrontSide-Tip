let parsedJSON = null;
let insertButtonURL;

const insertURL = "/insertAccountManagerData.do";
const updateURL = "/updateAccountManagerData.do";


// 제약조건 상수
	// CUSTOM 테이블
	const BUSI_NUM_CONDITION = 20;
	const CUSOTM_CONDITION = 20;
	const SHORT_CONDITION = 20;
	
	const CEO_CONDITION = 10; 
	const CHARGE_PERSON_CONDITION = 10;
	const BUSI_CONDITION_CONDITION = 10;
	const ITEM_CONDITION = 10;
	const POST_NUM_CONDITION = 10;
	
	const ADDR_1_CONDITION = 80;
	const ADDR_2_CONDITION = 80;
	
	const TEL_CONDITION = 10;
	const FAX_CONDITION = 10;
	const HOME_PAGE_CONDITION = 20;
	
	const COUNTRY_ENG_CONDITION = 20;
	const COUNTRY_KOR_CONDITION = 20;
	
	const REGI_INFO_MAN_CONDITION = 10;
	const MODI_INFO_MAN_CONDITION = 10;

	// ACCOUNT 테이블
	const FACTORY_CONDITION = 20;
	const TRADE_BANK_CONDITION = 20;
	const ACCOUNT_NUM_CONDITION = 20;


// 초기화
$(function() {
	insertButtonURL = insertURL;
});


// 입력창 초기화
	function initPage(context) {
		location.href = context + "/accountManagerView.do";
	}


// 거래처 검색버튼 메서드
	function searchData(context) {
		const resultContainerTable = $(".resultContainer").children("table").children("tbody");
		
		const voBusiNum = $(".searchVoBusiNum").val();
		const voCustom = $(".searchVoCustom").val();
		
		$.ajax({
			type: "POST",
			async: true,
			url: context + "/searchAccountManagerData.do",
			dataType: "TEXT",
			data: {
				"voBusiNum": voBusiNum,
				"voCustom": voCustom
			},
			success: function(jsonString, status) {
				parsedJSON = JSON.parse(jsonString);
				$(".searchCustomData").remove();
				
				if(parsedJSON.length == 0) {
					alert("데이터를 찾을 수 없습니다.");
					return;
				}
				
				for(let i = 0; i < parsedJSON.length; i++) {
					const tr = $("<tr>").attr({
						"class": "searchCustomData",
					});
					const newBusiNum = $("<td>").text(parsedJSON[i].customVO.voBusiNum);
					const newCustom = $("<td>").text(parsedJSON[i].customVO.voCustom);
					const idxValue = $("<input>").attr({
						"class": "idxValue",
						"type": "hidden"
					});
					$(idxValue).val(i);
					
					$(tr).dblclick(function() {
						insertButtonURL = updateURL;
						viewTotalData($(this).children(".idxValue").val());
					});
					
					$(tr).append(newBusiNum);
					$(tr).append(newCustom);
					$(tr).append(idxValue);
					
					$(resultContainerTable).append(tr);
				}
				
				/* 출력형식
	            <tr class="searchCustomData">
	                <td>111-11-11111</td>
	                <td>롯데마트</td>
	            </tr>
	            */
			}
		});
	}
	
	
	function viewTotalData(idx) {
		/* CUSTOM 데이터 */
		$(".voBusiNum").val(parsedJSON[idx].customVO.voBusiNum).css("display", "none");
		$(".print").prop("disabled", false);
		
		$(".fixedVoBusiNum").text(parsedJSON[idx].customVO.voBusiNum).css("display", "block");
		$(".voBusiNumOrigin").val(parsedJSON[idx].customVO.voBusiNum);
		$(".voCustom").val(parsedJSON[idx].customVO.voCustom);
		$(".voShort").val(parsedJSON[idx].customVO.voShort);
		
		$(".voCEO").val(parsedJSON[idx].customVO.voCEO);
		$(".voChargePerson").val(parsedJSON[idx].customVO.voChargePerson);
		$(".voBusiCondition").val(parsedJSON[idx].customVO.voBusiCondition);
		$(".voItem").val(parsedJSON[idx].customVO.voItem);
		$(".voPostNum").val(parsedJSON[idx].customVO.voPostNum);
		
		$(".voAddr1").val(parsedJSON[idx].customVO.voAddr1);
		$(".voAddr2").val(parsedJSON[idx].customVO.voAddr2);
		
		$(".voTEL").val(parsedJSON[idx].customVO.voTEL);
		$(".voFAX").val(parsedJSON[idx].customVO.voFAX);
		$(".voHomePage").val(parsedJSON[idx].customVO.voHomePage);
		
		
		const voCoYN = parsedJSON[idx].customVO.voCoYN;
		if(voCoYN == "N") {
			$(".voCoYN_N").prop("checked", true);
		}
		
		const voForeignYN = parsedJSON[idx].customVO.voForeignYN;
		if(voForeignYN == "Y") {
			$(".voForeignYN_Y").prop("checked", true);
		}
		
		const voTaxYN = parsedJSON[idx].customVO.voTaxYN;
		if(voTaxYN == "N") {
			$(".voTaxYN").val("N");
		}
		
		$(".voCountryENG").val(parsedJSON[idx].customVO.voCountryENG);
		$(".voCountryKOR").val(parsedJSON[idx].customVO.voCountryKOR);
		
		const voSpecialRelation = parsedJSON[idx].customVO.voSpecialRelation;
		if(voSpecialRelation == "Y") {
			$(".voSpecialRelation").prop("checked", true);
		}
		
		const voTradeStop = parsedJSON[idx].customVO.voTradeStop;
		if(voTradeStop == "Y") {
			$(".voTradeStop").prop("checked", true);
		}
		
		$(".voContractPeriod_S").val(parsedJSON[idx].customVO.voContractPeriod_S_String);
		$(".voContractPeriod_E").val(parsedJSON[idx].customVO.voContractPeriod_E_String);
		
		$(".voRegiInfoMan").val(parsedJSON[idx].customVO.voRegiInfoMan);
		const voRegiInfoDate_String = parsedJSON[idx].customVO.voRegiInfoDate_String;
		$(".voRegiInfoDate").val(voRegiInfoDate_String);
		$(".fixedVoRegiInfoDate").text(voRegiInfoDate_String);
		
		$(".voModiInfoMan").val(parsedJSON[idx].customVO.voModiInfoMan);
		const voModiInfoDate_String = parsedJSON[idx].customVO.voModiInfoDate_String;
		
		$(".voModiInfoDate").val(voModiInfoDate_String);
		
		$(".fixedVoModiInfoDate").text("").text(voModiInfoDate_String);
		
		/* ACCOUNT 데이터 */
		$(".voFactory").val(parsedJSON[idx].accountVO.voFactory);
		$(".voTradeBank").val(parsedJSON[idx].accountVO.voTradeBank);
		$(".voAccountNum").val(parsedJSON[idx].accountVO.voAccountNum);
	}
	
	
// 거래처 데이터 저장버튼 메서드
	function insertData(context) {
		const isValidData = checkValidData();
		
		if(isValidData) {
			$.ajax({
				type: "POST",
				async: true,
				url: context + insertButtonURL,
				dataType: "TEXT",
				data: {
					"voBusiNum": $(".voBusiNum").val(),
					"voBusiNumOrigin": $(".voBusiNumOrigin").val(),
					"voCustom": $(".voCustom").val(),
					"voShort": $(".voShort").val(),
					
					"voCEO": $(".voCEO").val(),
					"voChargePerson": $(".voChargePerson").val(),
					"voBusiCondition": $(".voBusiCondition").val(),
					"voItem": $(".voItem").val(),
					"voPostNum": $(".voPostNum").val(),
					
					"voAddr1": $(".voAddr1").val(),
					"voAddr2": $(".voAddr2").val(),
					
					"voTEL": $(".voTEL").val(),
					"voFAX": $(".voFAX").val(),
					"voHomePage": $(".voHomePage").val(),
					
					"voCoYN": $(".voCoYN:checked").val(),
					"voForeignYN": $(".voForeignYN:checked").val(),
					"voTaxYN": $(".voTaxYN").val(),
					
					"voCountryENG": $(".voCountryENG").val(),
					"voCountryKOR": $(".voCountryKOR").val(),
					
					"voSpecialRelation": $(".voSpecialRelation:checked").val(),
					"voTradeStop": $(".voTradeStop:checked").val(),
					
					"voContractPeriod_S": $(".voContractPeriod_S").val(),
					"voContractPeriod_E": $(".voContractPeriod_E").val(),
					
					"voRegiInfoMan": $(".voRegiInfoMan").val(),
					"voRegiInfoDate": $(".voRegiInfoDate").val(),
					"voModiInfoMan": $(".voModiInfoMan").val(),
					"voModiInfoDate": $(".voModiInfoDate").val(),
					
					"voFactory": $(".voFactory").val(),
					"voTradeBank": $(".voTradeBank").val(),
					"voAccountNum": $(".voAccountNum").val()
				},
				success: function(result, status) {
					if(result == 1) {
						alert("데이터 저장 완료");
						
					} else {
						alert("데이터 저장 실패...");
					}
					
					location.href = context + "/accountManagerView.do";
				}		
			});
		}
	}
	
	
	// 입력값 제약조건 검사
	function checkValidData() {
		
	/* CUSTOM */
		// 1. 사업자번호 검사
		const busiNumLength = $(".voBusiNum").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(busiNumLength > BUSI_NUM_CONDITION || busiNumLength < 1) {
			alert("사업자번호가 유효하지 않습니다. - 입력 byte수 : " + busiNumLength);
			$(".voBusiNum").val("");
			$(".voBusiNum").css("border-color", "#ff0058");
			
			$(".voBusiNum").focus(function() {
				$(".voBusiNum").css("border-color", "");
			});
			
			return false;
		}
		
		// 2. 거래처명 검사
		const customLength = $(".voCustom").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(customLength > CUSOTM_CONDITION || customLength < 1) {
			alert("거래처명이 유효하지 않습니다. - 입력 byte수 : " + customLength);
			$(".voCustom").val("");
			$(".voCustom").css("border-color", "#ff0058");
			
			$(".voCustom").focus(function() {
				$(".voCustom").css("border-color", "");
			});
			
			return false;
		}
		
		// 3. 약칭 검사
		const shortLength = $(".voShort").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(shortLength > SHORT_CONDITION) {
			alert("약칭이 유효하지 않습니다. - 입력 byte수 : " + shortLength);
			$(".voShort").val("");
			$(".voShort").css("border-color", "#ff0058");
			
			$(".voShort").focus(function() {
				$(".voShort").css("border-color", "");
			});
			
			return false;
		}
		
		// 4. 대표자 검사
		const ceoLength = $(".voCEO").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(ceoLength > CEO_CONDITION) {
			alert("대표자가 유효하지 않습니다. - 입력 byte수 : " + ceoLength);
			$(".voCEO").val("");
			$(".voCEO").css("border-color", "#ff0058");
			
			$(".voCEO").focus(function() {
				$(".voCEO").css("border-color", "");
			});
			
			return false;
		}
		
		// 5. 담당자 검사
		const chargePersonLength = $(".voChargePerson").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(chargePersonLength > CHARGE_PERSON_CONDITION) {
			alert("담당자가 유효하지 않습니다. - 입력 byte수 : " + chargePersonLength);
			$(".voChargePerson").val("");
			$(".voChargePerson").css("border-color", "#ff0058");
			
			$(".voChargePerson").focus(function() {
				$(".voChargePerson").css("border-color", "");
			});
			
			return false;
		}
		
		// 6. 업태 검사
		const busiConditionLength = $(".voBusiCondition").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(busiConditionLength > BUSI_CONDITION_CONDITION) {
			alert("업태가 유효하지 않습니다. - 입력 byte수 : " + busiConditionLength);
			$(".voBusiCondition").val("");
			$(".voBusiCondition").css("border-color", "#ff0058");
			
			$(".voBusiCondition").focus(function() {
				$(".voBusiCondition").css("border-color", "");
			});
			
			return false;
		}
		
		// 7. 종목 검사
		const itemLength = $(".voItem").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(itemLength > ITEM_CONDITION) {
			alert("종목이 유효하지 않습니다. - 입력 byte수 : " + itemLength);
			$(".voItem").val("");
			$(".voItem").css("border-color", "#ff0058");
			
			$(".voItem").focus(function() {
				$(".voItem").css("border-color", "");
			});
			
			return false;
		}
		
		// 8. 우편번호 검사
		const postNumLength = $(".voPostNum").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(postNumLength > POST_NUM_CONDITION) {
			alert("우편번호가 유효하지 않습니다. - 입력 byte수 : " + postNumLength);
			$(".voPostNum").val("");
			$(".voPostNum").css("border-color", "#ff0058");
			
			$(".voPostNum").focus(function() {
				$(".voPostNum").css("border-color", "");
			});
			
			return false;
		}
		
		// 9. 주소1 검사
		const addr1Length = $(".voAddr1").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(addr1Length > ADDR_1_CONDITION) {
			alert("주소1이 유효하지 않습니다. - 입력 byte수 : " + addr1Length);
			$(".voAddr1").val("");
			$(".voAddr1").css("border-color", "#ff0058");
			
			$(".voAddr1").focus(function() {
				$(".voAddr1").css("border-color", "");
			});
			
			return false;
		}
		
		// 10. 주소2 검사
		const addr2Length = $(".voAddr2").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(addr2Length > ADDR_2_CONDITION) {
			alert("주소2가 유효하지 않습니다. - 입력 byte수 : " + addr2Length);
			$(".voAddr2").val("");
			$(".voAddr2").css("border-color", "#ff0058");
			
			$(".voAddr2").focus(function() {
				$(".voAddr2").css("border-color", "");
			});
			
			return false;
		}
		
		// 11. 전화번호 검사
		const telLength = $(".voTEL").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(telLength > TEL_CONDITION) {
			alert("TEL이 유효하지 않습니다. - 입력 bypte수 : " + telLength);
			$(".voTEL").val("");
			$(".voTEL").css("border-color", "#ff0058");
			
			$(".voTEL").focus(function() {
				$(".voTEL").css("border-color", "");
			});
			
			return false;
		}
		
		// 12. 팩스 검사
		const faxLength = $(".voFAX").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(faxLength > FAX_CONDITION) {
			alert("팩스가 유효하지 않습니다. - 입력 byte수 : " + faxLength);
			$(".voFAX").val("");
			$(".voFAX").css("border-color", "#ff0058");
			
			$(".voFAX").focus(function() {
				$(".voFAX").css("border-color", "#ff0058");
			});
			
			return false;
		}
		
		// 13. 홈페이지 검사
		const homePageLength = $(".voHomePage").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(homePageLength > HOME_PAGE_CONDITION) {
			alert("홈페이지가 유효하지 않습니다. - 입력 byte수 : " + homePageLength);
			$(".voHomePage").val("");
			$(".voHomePage").css("border-color", "#ff0058");
			
			$("voHomePage").focus(function() {
				$(".voHomePage").css("border-color", "");
			});
			
			return false;
		}
		
		// 14. 국가 영문 검사
		const countryEngLength = $(".voCountryENG").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(countryEngLength > COUNTRY_ENG_CONDITION) {
			alert("국가_영문이 유효하지 않습니다. 입력 byte수 : " + countryEngLength);
			$(".voCountryENG").val("");
			$(".voCountryENG").css("border-color", "#ff0058");
			
			$(".voCountryENG").focus(function() {
				$(".voCountryENG").css("border-color", "#ff0058");
			});
			
			return false;
		}
		
		// 15. 국가 한글 검사
		const countryKorLength = $(".voCountryKOR").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(countryKorLength > COUNTRY_KOR_CONDITION) {
			alert("국가_한글이 유효하지 않습니다. - 입력 bypte수 : " +  countryKorLength);
			$(".voCountryKOR").val("");
			$(".voCountryKOR").css("border-color", "#ff0058");
			
			$(".voCountryKOR").focus(function() {
				$(".voCountryKOR").css("border-color", "");
			});
			
			return false;
		}
		
		// 16. 등록인 검사
		const regiInfoManLength = $(".voRegiInfoMan").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(regiInfoManLength > REGI_INFO_MAN_CONDITION) {
			alert("등록인이 유효하지 않습니다. - 입력 bypte수 : " + regiInfoManLength);
			$(".voRegiInfoMan").val("");
			$(".voRegiInfoMan").css("border-color", "#ff0058");
			
			$(".voRegiInfoMan").focus(function() {
				$(".voRegiInfoMan").css("border-color", "");
			});
			
			return false;
		}
		
		// 17. 변경인 검사
		const modiInfoManLength = $(".voModiInfoMan").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(modiInfoManLength > MODI_INFO_MAN_CONDITION) {
			alert("변경인이 유효하지 않습니다. - 입력 bypte수 : " + modiInfoManLength);
			$(".voModiInfoMan").val("");
			$(".voModiInfoMan").css("border-color", "#ff0058");
			
			$(".voModiInfoMan").focus(function() {
				$(".voModiInfoMan").css("border-color", "");
			});
			
			return false;
		}
		
	/* ACCOUNT */
		// 18. 사무소 검사
		const factoryLength = $(".voFactory").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(factoryLength > FACTORY_CONDITION) {
			alert("사무소가 유효하지 않습니다. - 입력 byte수 : " + factoryLength);
			$(".voFactory").val("");
			$(".voFactory").css("border-color", "#ff0058");
			
			$(".voFactory").focus(function() {
				$(".voFactory").css("border-color", "");
			});
			
			return false;
		}
		
		// 19. 거래은행 검사
		const tradeBankLength = $(".voTradeBank").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(tradeBankLength > TRADE_BANK_CONDITION) {
			alert("거래은행이 유효하지 않습니다. - 입력 bypte수 : " + tradeBankLength);
			$(".voTradeBank").val("");
			$(".voTradeBank").css("border-color", "#ff0058");
			
			$(".voTradeBank").focus(function() {
				$(".voTradeBank").css("border-color", "");
			});
			
			return false;
		}
		
		// 20. 계좌번호 검사
		const accountNumLength = $(".voAccountNum").val().replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
		
		if(accountNumLength > ACCOUNT_NUM_CONDITION) {
			alert("계좌번호가 유효하지 않습니다. - 입력 byte수 : " + accountNumLength);
			$(".voAccountNum").val("");
			$(".voAccountNum").css("border-color", "#ff0058");
			
			$(".voAccountNum").focus(function() {
				$(".voAccountNum").css("border-color", "");
			});
			
			return false;
		}
		
		return true;
	}
	
	
// 거래처 데이터 삭제버튼 메서드
	function deleteData(context) {
		const voBusiNum = $(".voBusiNum").val();
		
		$.ajax({
			type: "POST",
			async: true,
			url: context + "/deleteAccountManagerData.do",
			dataType: "TEXT",
			data: {
				"voBusiNum": voBusiNum
			},
			success: function(resultValue, status) {
				if(resultValue > 0) {
					alert(voBusiNum + " 데이터가 삭제 되었습니다.");
					location.href = context + "/accountManagerView.do";
					
				} else {
					alert(voBusiNum + " (은)는 존재하지 않는 데이터 입니다.");
				}
			}
		});
	}
	
	
// 데이터 프린트 메서드
//	function printData() {
//		const printHtml = $(".insertForm").clone();
//		const innerHtml = printHtml[0].innerHtml;
//		
//		alert(($("style")[0]).innerHTML);
//		
//		let printCSS = "";
//		for(let css of $(style)) {
//			printCSS += css.innerHtml;
//		}
//		
//		let popupWindow = window.open("", "_blank", "width: 700, height: 800");
//		popupWindow.document.write(
//			"<!DOCUMENT html>" +
//			"<html lang='ko'>" +
//			
//			"<head>" +
//			"<style>" + printCSS + "</style>" +
//			"</head>" +
//			
//			"<body>" + printHtml + "</body>" +
//			"</html>"
//		);
//		
//		popupWindow.document.close();
//		popupWindow.focus();
//		
//		/* 1초 지연후 실행 */
//		setTimeout(function() {
//			popupWindow.print();
//			popupWindow.close();
//		}, 1000);
//	}
	
	
// 국가검색
	// 국가검색 팝업 오픈 메서드
	function openCountryPop(context) {
		const insertForm = $(".insertContainer").children(".insertForm");
		
		$(".countryPop").css("display", "block");
	}
	
	
	// 국가검색 팝업 닫기 메서드
	function closeCountryPop() {
		$(".countryPop").css("display", "none");
	}
	
	
	$(function test() {
		$("input").focus(function(event) {
			closeCountryPop();
		});
	});
	
	
	
	// 국가선택 메서드
	function inputCountry(target) {
		const eng = $(target).children("td")[0];
		const kor = $(target).children("td")[1];
		
		$(".voCountryENG").val($(eng).text());
		$(".voCountryKOR").val($(kor).text());
		
		closeCountryPop();
	}