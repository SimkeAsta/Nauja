package ltu.dovanos.entities;

public class LaiskasCommand {
	
	private String name;
	private String surname;
	private String city;
	private String country;
	private String street;
	private Integer houseNumber;
	
	public LaiskasCommand() {}

	public LaiskasCommand(String name, String surname, String city, String country, String street,
			Integer houseNumber) {
		this.name = name;
		this.surname = surname;
		this.city = city;
		this.country = country;
		this.street = street;
		this.houseNumber = houseNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public Integer getHouseNumber() {
		return houseNumber;
	}

	public void setHouseNumber(Integer houseNumber) {
		this.houseNumber = houseNumber;
	}

}
