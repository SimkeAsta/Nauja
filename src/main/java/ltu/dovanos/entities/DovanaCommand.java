package ltu.dovanos.entities;

import javax.validation.constraints.NotNull;

public class DovanaCommand {

	@NotNull(message = "Dovana title is required!")
	private String title;
	private String description;
	private String image;
	private Boolean kidsPresent;
	
	public DovanaCommand(String title, String description, String image, Boolean kidsPresent) {
		this.title = title;
		this.description = description;
		this.image = image;
		this.kidsPresent = kidsPresent;
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
