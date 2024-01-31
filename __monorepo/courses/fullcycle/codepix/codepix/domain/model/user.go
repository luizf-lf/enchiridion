package model

import (
	"github.com/asaskevich/govalidator"
)

type User struct {
	ID      	string `valid: "required"`
	UserName 	string `json: "user_name valid:"required"`
	Email     string `json: "email" valid: "required"`
}

func (user *User) isValid() error {
	_, err := govalidator.ValidateStruct(user)

	if err != nil {
		return err
	}
	return nil
}

func NewUser(userName string, email string) (*User, error) {
	user := User{
		UserName: userName,
		Email:      email,
	}

	err := user.isValid()
	if err != nil {
		return nil, err
	}

	return &user, nil
}