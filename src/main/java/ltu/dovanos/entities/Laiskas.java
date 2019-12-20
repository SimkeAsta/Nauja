package ltu.dovanos.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Laiskas {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@OneToMany(mappedBy="laiskas")
	private Set<Dovana> dovanos = new HashSet<>();
	
	private String name;
	private String surname;
	private String city;
	private String country;
	private String street;
	private Integer houseNumber;
	
	public Laiskas() {}
	
	public Laiskas(Long id, String name, String surname, String city, String country, String street,
			Integer houseNumber) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.city = city;
		this.country = country;
		this.street = street;
		this.houseNumber = houseNumber;
	}
	
	public String laiskoPavadinimas() {
		return name + " " + surname;
	}

	public String address() {
		return houseNumber + " " + street + ", " + city + ", " + country;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
