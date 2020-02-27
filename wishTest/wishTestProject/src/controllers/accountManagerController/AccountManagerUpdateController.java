package controllers.accountManagerController;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.SubController;
import service.AccountManagerService;
import vo.AccountVO;
import vo.CustomVO;

public class AccountManagerUpdateController implements SubController {
	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) 
					throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		
		System.out.println("업데이터 컨트롤 호출");
		
		
		String voBusiNumOrigin = request.getParameter("voBusiNumOrigin");
		
		AccountManagerService accountManagerService = new AccountManagerService();
		CustomVO customVO = getParamForCustomVO(request);
		
		int resultCustom = accountManagerService.updateCustom(voBusiNumOrigin, customVO);
		if(resultCustom == 1) {
			System.out.println("Custom 데이터 수정 완료 - 값 : " + resultCustom);
			
		} else {
			System.out.println("Custom 데이터 수정 실패...");
		}

		AccountVO accountVO = getParamForAccountVO(request);
		
		int resultAccount = accountManagerService.updateAccount(accountVO);
		if(resultAccount == 1) {
			System.out.println("Account 데이터 수정 완료 - 값 : " + resultAccount);
			
		} else {
			System.out.println("Account 데이터 수정실패...");
		}
		
		out.print(resultCustom & resultAccount);
		
		out.close();
	}
	
	
	private CustomVO getParamForCustomVO(HttpServletRequest request) {
		CustomVO customVO = new CustomVO();
		
		customVO.setVoBusiNum(request.getParameter("voBusiNum"));
		customVO.setVoCustom(request.getParameter("voCustom"));
		customVO.setVoShort(request.getParameter("voShort"));
		
		customVO.setVoCEO(request.getParameter("voCEO"));
		customVO.setVoChargePerson(request.getParameter("voChargePerson"));
		customVO.setVoBusiCondition(request.getParameter("voBusiCondition"));
		customVO.setVoItem(request.getParameter("voItem"));
		customVO.setVoPostNum(request.getParameter("voPostNum"));
		
		customVO.setVoAddr1(request.getParameter("voAddr1"));
		customVO.setVoAddr2(request.getParameter("voAddr2"));
		
		customVO.setVoTEL(request.getParameter("voTEL"));
		customVO.setVoFAX(request.getParameter("voFAX"));
		customVO.setVoHomePage(request.getParameter("voHomePage"));
		
		customVO.setVoCoYN(request.getParameter("voCoYN"));
		customVO.setVoForeignYN(request.getParameter("voForeignYN"));
		customVO.setVoTaxYN(request.getParameter("voTaxYN"));
		
		customVO.setVoCountryENG(request.getParameter("voCountryENG"));
		customVO.setVoCountryKOR(request.getParameter("voCountryKOR"));
		
		String voSpecialRelation = request.getParameter("voSpecialRelation");
		if(voSpecialRelation == null) {
			voSpecialRelation = "N";
		}
		customVO.setVoSpecialRelation(voSpecialRelation);
		
		String voTradeStop = request.getParameter("voTradeStop");
		if(voTradeStop == null) {
			voTradeStop = "N";
		}
		customVO.setVoTradeStop(voTradeStop);
		
		
		System.out.println("------ ContractPeriod_S : " + customVO.getVoContractPeriod_S());
		
		
		String voContractPeriod_S_String = request.getParameter("voContractPeriod_S");
		if(voContractPeriod_S_String != null && voContractPeriod_S_String.length() > 0) {
			customVO.setVoContractPeriod_S(Date.valueOf(voContractPeriod_S_String).toLocalDate());
		}
		
		String voContractPeriod_E_String = request.getParameter("voContractPeriod_E");
		if(voContractPeriod_E_String != null && voContractPeriod_E_String.length() > 0) {
			customVO.setVoContractPeriod_E(Date.valueOf(voContractPeriod_E_String).toLocalDate());
		}
		
		customVO.setVoRegiInfoMan(request.getParameter("voRegiInfoMan"));
		customVO.setVoModiInfoMan(request.getParameter("voModiInfoMan"));
		
		return customVO;
	}
	
	
	public AccountVO getParamForAccountVO(HttpServletRequest request) {
		AccountVO accountVO = new AccountVO();
		
		accountVO.setVoBusiNum(request.getParameter("voBusiNum"));
		accountVO.setVoFactory(request.getParameter("voFactory"));
		accountVO.setVoTradeBank(request.getParameter("voTradeBank"));
		accountVO.setVoAccountNum(request.getParameter("voAccountNum"));
		
		return accountVO;
	}
}
