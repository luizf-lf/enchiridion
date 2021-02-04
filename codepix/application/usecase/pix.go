package usecase

import (
	"github.com/luizf-lf/imsersao-fullstack-fullcycle/codepix/domain/model"
)

// PixUseCase - pix structure
type PixUseCase struct {
	PixKeyRepository model.PixKeyRepositoryInterface
}
// RegisterKey - register a new pix key
func (p *PixUseCase) RegisterKey(key string, kind string, accountId string) (*model.PixKey, error) {
	account, err := p.PixKeyRepository.FindAccount(accountId)

	if err != nil {
		return nil, err
	}

	pixKey, err := model.NewPixKey(kind, account, key)
	if err != nil {
		return nil, err
	}

	p.PixKeyRepository.RegisterKey(pixKey)
	if pixKey.ID == "" {
		return nil, err
	}

	return pixKey, nil
}

// FindKey - find pix key
func (p *PixUseCase) FindKey(key string, kind string) (*model.PixKey, error) {
	pixKey, err := p.PixKeyRepository.FindKeyByKind(key, kind)
	if err != nil {
		return nil, err
	}
	return pixKey, nil
}