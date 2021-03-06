package ltu.dovanos.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Dovana {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, unique = true)
	private String title;
	private String description;
	private String image;
	private Boolean kidsPresent;
	
	@ManyToOne
	@JoinColumn(name = "laiskas_id")
	private Laiskas laiskas;
	
	public Dovana() {}
	
	public Dovana(Long id, String title, String description, String image, Boolean kidsPresent) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.image = image;
		this.kidsPresent = kidsPresent;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Boolean getKidsPresent() {
		return kidsPresent;
	}

	public void setKidsPresent(Boolean kidsPresent) {
		this.kidsPresent = kidsPresent;
	}
	
}
