package vo;

public class AccountManagerVO {
	private CustomVO customVO;
	private AccountVO accountVO;
	
	
	public AccountManagerVO() {}
	
	public AccountManagerVO(CustomVO customVO, AccountVO accountVO)	{
		this.customVO = customVO;
		this.accountVO = accountVO;
	}

	
	public CustomVO getCustomVO() {
		return customVO;
	}
	public void setCustomVO(CustomVO customVO) {
		this.customVO = customVO;
	}

	
	public AccountVO getAccountVO() {
		return accountVO;
	}
	public void setAccountVO(AccountVO accountVO) {
		this.accountVO = accountVO;
	}
}
