package tester;

import javax.sql.DataSource;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import dao.AccountManagerDao;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "/tester/dbTestContext.xml")
public class DBTester {
	@Autowired
	private DataSource dataSource;
	
	@Autowired
	private AccountManagerDao accountManagerDao;
	
//	private String voBusiNum;
//	private String voCustom;
	
	
	@Before
	public void setUp() {
//		voBusiNum = "BUSI_NUM";
//		voCustom = "CUSTOM";
	}
	
	
// dataSource
	@Test
	public void dataSource() {
		assertThat(dataSource, not(nullValue()));
	}
	
	
// accountManagerDao
	@Test
	public void customDao() {
		assertThat(accountManagerDao, not(nullValue()));
	}
	
	
// selectCustom
//	@Test
//	public void selectCustom() {
//		CustomVO vo = customDao.selectCustom(voBusiNum, voCustom);
//		assertThat(vo, not(nullValue()));
//	}
}