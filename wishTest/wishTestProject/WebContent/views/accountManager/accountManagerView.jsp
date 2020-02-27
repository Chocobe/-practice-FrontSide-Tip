<%@page import="java.util.Date"%>
<%@page import="java.io.File"%>
<%@ page 
	language="java"
	contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"
	
	info="거래처 관리 페이지"
%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:set var="contextPath" value="<%= request.getContextPath() %>"/>


<%
	String accountManagerView_css = application.getRealPath("/css/accountManager/accountManagerView.css");
	File accountManagerView_css_file = new File(accountManagerView_css);
	Date accountManagerView_css_ver = new Date(accountManagerView_css_file.lastModified());
	
	String accountManagerView_js = application.getRealPath("/js/accountManager/accountManagerView.js");
	File accountManagerView_js_file = new File(accountManagerView_js);
	Date accountManagerView_js_ver = new Date(accountManagerView_js_file.lastModified());
%>

<c:set var="accountManagerView_css_ver" value="<%= accountManagerView_css_ver %>"/>
<c:set var="accountManagerView_js_ver" value="<%= accountManagerView_js_ver %>"/>


<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>거래처 관리</title>
        
        <link href="${contextPath}/css/accountManager/accountManagerView.css?ver=${accountManagerView_css_ver}" rel="stylesheet" type="text/css">
    </head>
    
    <body>
        <div class="wrap">
            <!-- 버튼 컨테이너 -->
            <div class="buttonContainer">
                <input type="button" class="search" value="조회" disabled>
                <input type="button" class="init" value="초기화" onclick="initPage(`${contextPath}`);">
                <input type="button" class="insert" value="저장" onclick="insertData(`${contextPath}`);">
                <input type="button" class="delete" value="삭제" onclick="deleteData(`${contextPath}`);">
                <input type="button" class="print" value="인쇄" disabled>
                <input type="button" class="config" value="화면설정" disabled>
                <input type="button" class="close" value="닫기" disabled>
            </div>
            
            
            <!-- 검색 컨테이너 -->
            <div class="searchContainer">
                <!-- 검색창 -->
                <div class="searchInnerContainer">
                    <table>
                        <tr>
                            <th>사업자번호</th>
                            
                            <td>
                                <input type="text" name="voBusiNum" class="searchVoBusiNum">
                            </td>
                            
                            <td></td>
                        </tr>
                        
                        <tr>
                            <th>거래처명</th>
                            
                            <td>
                                <input type="text" name="voCustom" class="searchVoCustom">
                            </td>
                            
                            <td>
                                <input type="submit" value="조회" onclick="searchData(`${contextPath}`);">
                            </td>
                        </tr>
                    </table>
                </div>
                
                
                <!-- 검색 결과창 -->
                <div class="resultContainer">
                    <table border="1" style="border-collapse: collapse">
                        <tr>
                            <th>사업자 번호</th>
                            <th>거래처명</th>
                        </tr>
                    </table>
                </div>
            </div>
            
            
            <!-- 입력 컨테이너 -->
            <!-- "저장"버튼 - js로 submit() -->
            <div class="insertContainer">
                <form class="insertForm" action="${contextPath}/insertCustom.do" method="POST">
                    <table>
                        <tr>
                            <th>사업자번호</th>
                            
                            <td>
                                <input type="text" name="voBusiNum" class="voBusiNum">
                                <input type="hidden" name="voBusiNumOrigin" class="voBusiNumOrigin">
                            </td>
                            
                            
                            <th>약&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;칭</th>
                            
                            <td>
                                <input type="text" name="voShort" class="voShort">
                            </td>
                        </tr>
                        
                        <tr>
                            <th>거 래 처 명</th>
                            
                            <td colspan="4">
                                <input type="text" name="voCustom" class="voCustom longBox">
                            </td>
                        </tr>
                        
                        <tr>
                            <th>대&nbsp;&nbsp;&nbsp;표&nbsp;&nbsp;&nbsp;자</th>
                            
                            <td>
                                <input type="text" name="voCEO" class="voCEO">
                            </td>
                            
                            
                            <th>담&nbsp;&nbsp;&nbsp;당&nbsp;&nbsp;&nbsp;자</th>
                            
                            <td>
                                <input type="text" name="voChargePerson" class="voChargePerson">
                            </td>
                        </tr>
                        
                        <tr>
                            <th>업&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;태</th>
                            
                            <td>
                                <input type="text" name="voBusiCondition" class="voBusiCondition">
                            </td>
                            
                            
                            <th>종&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;목</th>
                            
                            <td>
                                <input type="text" name="voItem" class="voItem">
                            </td>
                        </tr>
						
                        <tr>
                            <th>우 편 번 호</th>
                            
                            <td>
                                <input type="text" name="voPostNum" class="voPostNum">
                                <input type="button" class="postSearchButton" value="검색" disabled>
                            </td>
                            
                            <th>주&nbsp;&nbsp;&nbsp;소&nbsp;&nbsp;&nbsp;1</th>
                            
                            <td>
                                <input type="text" name="voAddr1" class="voAddr1">
                            </td>
                        </tr>
                            
                        <tr>
                            <th>주&nbsp;&nbsp;&nbsp;소&nbsp;&nbsp;&nbsp;2</th>
                            
                            <td colspan="3">
                                <input type="text" name="voAddr2" class="voAddr2">
                            </td>
                        </tr>
                        
                        <tr>
                            <th>전 화 번 호</th>
                            
                            <td>
                                <input type="text" name="voTEL" class="voTEL">
                            </td>
                            
                            <th>팩 스 번 호</th>
                            
                            <td>
                                <input type="text" name="voFAX" class="voFAX">
                            </td>
                        </tr>
                        
                        <tr>
                            <th>홈 페 이 지</th>
                            
                            <td colspan="3">
                                <input type="text" name="voHomePage" class="voHomePage">
                            </td>
                        </tr>
                        
                        <tr>
                            <th>법 인 여 부</th>
                            
                            <td class="alignTD" style="border: 1px solid #999;">
                                <div class="radioWrap">
                                    <input type="radio" name="voCoYN" class="voCoYN voCoYN_Y" id="voCoYN_L" value="Y" checked>
                                    <label for="voCoYN_L">법인</label>
                                </div>
                                
                                <div class="radioWrap">
                                    <input type="radio" name="voCoYN" class="voCoYN voCoYN_N" id="voCoYN_P" value="N">
                                    <label for="voCoYN_P">개인</label>
                                </div>
                            </td>
                            
                            <th>해 외 여 부</th>
                            
                            <td class="alignTD" style="border: 1px solid #999;">
                                <div class="radioWrap">
                                    <input type="radio" name="voForeignYN" class="voForeignYN voForeignYN_N" id="voForeignYN_L" value="N" checked>
                                    <label for="voForeignYN_L">국내</label>
                                </div>
                                
                                <div class="radioWrap">
                                    <input type="radio" name="voForeignYN" class="voForeignYN voForeignYN_Y" id="voForeignYN_P" value="Y">
                                    <label for="voForeignYN_P">해외</label>
                                </div>
                            </td>
                        </tr>
                        
                        <tr>
                            <th>과 세 구 분</th>
                            
                            <td>
                                <select name="voTaxYN" class="voTaxYN">
                                    <option value="Y" selected>과세/면세</option>
                                    <option value="N">비과세</option>
                                </select>
                            </td>
                            
                            <th>국&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가</th>
                            
                            <td>
                                <!-- 수정불가로 변경할 것 -->
                                <input type="text" name="voCountryENG" class="voCountryENG">
                                <input type="text" name="voCountryKOR" class="voCountryKOR">
                                
                                <!-- js로 국가 목록 출력 & 위의 입력값에 대입 -->
                                <input type="button" value="검색" onclick="">
                            </td>
                        </tr>
                        
                        <tr>
                            <th>특수관계자</th>
                            
                            <td>
                                <input type="checkbox" name="voSpecialRelation" class="voSpecialRelation" value="Y">
                            </td>
                            
                            <th>거 래 중 지</th>
                            
                            <td>
                                <input type="checkbox" name="voTradeStop" class="voTradeStop" value="Y">
                            </td>
                        </tr>
                        
                        <tr>
                            <th>계 약 기 간</th>
                            
                            <td colspan="3">
                                <input type="date" name="voContractPeriod_S" class="voContractPeriod_S">
                                ~
                                <input type="date" name="voContractPeriod_E" class="voContractPeriod_E">
                            </td>
                        </tr>
                            
                        <tr>
                            <th>등 록 정 보</th>
                            
                            <td>
                                <input type="text" name="voRegiInfoMan" class="voRegiInfoMan">
                                <input type="text" name="voRegiInfoDate" class="voRegiInfoDate" disabled>
                            </td>
                            
                            <th>변 경 정 보</th>
                            
                            <td>
                                <input type="text" name="voModiInfoMan" class="voModiInfoMan">
                                <input type="text" name="voModiInfoDate" class="voModiInfoDate" disabled>
                            </td>
                        </tr>
                    </table>
                    
                    
                    <!-- 거래처 계좌정보 -->
                    <table class="accountInfoTable" border="1" style="border-collapse: collapse;">
                        <tr>
                            <th>사&nbsp;&nbsp;&nbsp;무&nbsp;&nbsp;&nbsp;소</th>
                            <th>은&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;행</th>
                            <th>계좌번호</th>
                        </tr>
                        
                        <tr>
                            <td>
                                <input type="text" name="voFactory" class="voFactory">
                            </td>
                            
                            <td>
                                <input type="text" name="voTradeBank" class="voTradeBank">
                            </td>
                            
                            <td>
                                <input type="text" name="voAccountNum" class="voAccountNum">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
            
            <!-- <div class="countryPop">
	            <table>
	                <tr>
	                    <th>영문명</th>
	                    <th>한글명</th>
	                </tr>
	                
	                <tr>
	                    <td>KOR</td>
	                    <td>대한민국</td>
	                </tr>
	                
	                <tr>
	                    <td>USA</td>
	                    <td>미국</td>
	                </tr>
	                
	                <tr>
	                    <td>CHN</td>
	                    <td>중국</td>
	                </tr>
	            </table>
	            
	            <input type="button" class="countryPopCloseButton" value="닫기" onclick="">
	        </div>
        </div> -->
        
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
        <script src="${contextPath}/js/accountManager/accountManagerView.js?ver=${accountManagerView_js_ver}" type="text/javascript"></script>
    </body>
</html>