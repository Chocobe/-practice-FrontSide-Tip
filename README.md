# 프로젝트 정리

## 1. radio버튼 처리

1. **radio**버튼 작성

    ```html
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
    ```


1. radio버튼의 **선택값 가져오기**

    ```javascript
        const voForeignYN = $(".voForeignYN:checked").val();
    ```


1. radio버튼의 **선택값 변경하기**

    ```javascript
        const voForeignYN = parsedJSON[idx].customVO.voForeignYN;
		if(voForeignYN == "Y") {
			$(".voForeignYN_Y").prop("checked", true);
		}
    ```


---


## 2. checkbox 처리

1. **checkbox** 작성

    ```html
        <input type="checkbox" name="voSpecialRelation" class="voSpecialRelation" value="Y">
    ```


1. checkbox **값 가져오기**

    ```javascript
        // javascript에서 읽어 올 때,
        $(".voSpecialRelation:checked").val();
    ```

    ```java
        // java에서 위의 값을 가져올 떄,
        String voSpecialRelation = request.getParameter("voSpecialRelation");
		if(voSpecialRelation == null) {
			voSpecialRelation = "N";
		}
    ```

1. checkbox **값 변경하기**

    ```javascript
        const voSpecialRelation = parsedJSON[idx].customVO.voSpecialRelation;
		if(voSpecialRelation == "Y") {
			$(".voSpecialRelation").prop("checked", true);
		}
    ```


---


## 3. 날짜, 시간 처리

1. 날짜 가져오기

    ```java
        String voContractPeriod_S_String = request.getParameter("voContractPeriod_S");
		
        if(voContractPeriod_S_String != null && voContractPeriod_S_String.length() > 0) {
			LocalDate voContractPeriod_S = Date.valueOf(voContractPeriod_S_String).toLocalDate();
			customVO.setVoContractPeriod_S(voContractPeriod_S);
		}
    ```


    ```javascript
        // VO객체에 LocalDate을 toString()한 문자열로 별도 저장
        // POJO에서 Timestamp값을 가져오면, 해당 값의 String타입을 따로 인스턴스 변수에 저장
        $(".voContractPeriod_S").val(parsedJSON[idx].customVO.voContractPeriod_S_String);
    ```


---


## 4. 문자열 크기 구하기 (정규식 사용)

* UTF-8에서 영문은 **1byte**, 한글은 **3byte**

* js에서 문자열의 길이를 구하는 정규식

    ```javascript
        const length = "대상_문자열".replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length
    ```


## 5. 현재 탭 닫기

* 크롬, 파이어폭스 에서는 **onclick**에 함수로 사용할 경우, 탭 닫기가 동작하지 않는다.

* html또는 jsp페이지에서 **onclick**에 다음과 같이 작성한다.

    ```html
        <태그 onclick="javascript:self.close();">
    ```