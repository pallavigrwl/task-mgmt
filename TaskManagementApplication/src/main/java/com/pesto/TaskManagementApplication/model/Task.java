package com.pesto.TaskManagementApplication.model;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String title;
  private String description;
  private Status status;

  public enum Status {
    TODO, INPROGRESS, DONE
  }

  public Task(Long id, String title, String description, String status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = Status.valueOf(status);
  }

  public Task(Long id, String title, String description, Status status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }

  public Task() {

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

  public Status getStatus() {
    return status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }
}