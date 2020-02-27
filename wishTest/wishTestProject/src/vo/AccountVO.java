package vo;

public class AccountVO {
	private String voBusiNum;
	private String voFactory;
	private String voTradeBank;
	private String voAccountNum;
	
	
	public AccountVO() { }
	
	
	public AccountVO(String voBusiNum,
					 String voFactory,
					 String voTradeBank,
					 String voAccountNum) {
		this.voBusiNum = voBusiNum;
		this.voFactory = voFactory;
		this.voTradeBank = voTradeBank;
		this.voAccountNum = voAccountNum;
	}


// BUSI_NUM
	public String getVoBusiNum() {
		return voBusiNum;
	}
	public void setVoBusiNum(String voBusiNum) {
		this.voBusiNum = voBusiNum;
	}


// FACTORY
	public String getVoFactory() {
		return voFactory;
	}
	public void setVoFactory(String voFactory) {
		this.voFactory = voFactory;
	}


// TRADE_BANK
	public String getVoTradeBank() {
		return voTradeBank;
	}
	public void setVoTradeBank(String voTradeBank) {
		this.voTradeBank = voTradeBank;
	}


// ACCOUNT_NUM
	public String getVoAccountNum() {
		return voAccountNum;
	}
	public void setVoAccountNum(String voAccountNum) {
		this.voAccountNum = voAccountNum;
	}
}
