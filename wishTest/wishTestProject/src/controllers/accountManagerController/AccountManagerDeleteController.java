package controllers.accountManagerController;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.SubController;
import service.AccountManagerService;

public class AccountManagerDeleteController implements SubController {
	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) 
					throws ServletException, IOException {
		String voBusiNum = request.getParameter("voBusiNum");
		
		System.out.println("DeleteController voBusiNum : " + voBusiNum);
		
		AccountManagerService customService = new AccountManagerService();
		int result = customService.deleteCustom(voBusiNum);
		
		PrintWriter out = response.getWriter();
		out.print(result);
	}
}
