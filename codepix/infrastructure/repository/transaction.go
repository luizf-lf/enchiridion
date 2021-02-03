package repository

import (
	"fmt"

	"github.com/luizf-lf/imsersao-fullstack-fullcycle/codepix/domain/model"
	"gorm.io/gorm"
)

// TransactionRepositoryDb - transaction repository model
type TransactionRepositoryDb struct {
	Db *gorm.DB
}

// Register - Register a transaction
func (t *TransactionRepositoryDb) Register(transaction *model.Transaction) error {
	err := t.Db.Create(transaction).Error

	if err != nil {
		return err
	}
	return nil
}

// Save - Save the transaction
func (t *TransactionRepositoryDb) Save(transaction *model.Transaction) error {
	err := t.Db.Save(transaction).Error

	if err != nil {
		return err
	}
	return nil
}

// Find - Find a transaction by id
func (t *TransactionRepositoryDb) Find(id string) (*model.Transaction, error) {
	var transaction model.Transaction
	err := t.Db.Preload("AccountFrom.Bank").First(&transaction, "id = ?", id)

	if transaction.ID == "" {
		return nil, fmt.Errorf("no transaction was found")
	}

	return &transaction, nil
	
}