package repository

import (
	"github.com/luizf-lf/imsersao-fullstack-fullcycle/codepix/domain/model"
	"gorm.io/gorm"
)


type TransactionRepositoryDb struct {
	Db *gorm.DB
}

func (t *TransactionRepositoryDb) Register(transaction *model.Transaction) error {
	err := t.Db.Create(transaction).Error

	if err != nil {
		return err
	}
	return nil
}

func (t *TransactionRepositoryDb) Save(transaction *model.Transaction) error {
	err := t.Db.Save(transaction).Error

	if err != nil {
		return err
	}
	return nil
}

func (t *TransactionRepositoryDb) Find(id string) (*model.Transaction, error) {
	var transaction model.Transaction
	err := t.Db.Preload("AccountFrom.Bank").First(&transaction, "id = ?", id)

	if transaction.ID == "" {
		return nil, ftm.Errorf("no transaction was found")
	}

	return &transaction, nil
	
}