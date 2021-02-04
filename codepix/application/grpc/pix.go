package grpc

import (
	"context"

	"github.com/luizf-lf/imsersao-fullstack-fullcycle/codepix/application/grpc/pb"
	"github.com/luizf-lf/imsersao-fullstack-fullcycle/codepix/application/usecase"
)

// PixGrpcService - Pix gRPC service structure
type PixGrpcService struct {
	PixUseCase usecase.PixUseCase
	pb.UnimplementedPixServiceServer
}

// RegisterPixKey - register a new pix key
func (p *PixGrpcService) RegisterPixKey(ctx context.Context, in *pb.PixKeyRegistration) (*pb.PixKeyCreatedResult, error) {
	key, err := p.PixUseCase.RegisterKey(in.Key, in.Kind, in.AccountId)
	if err != nil {
		return &pb.PixKeyCreatedResult{
			Status: "not created",
			Error: err.Error(),
		}, err
	}

	return &pb.PixKeyCreatedResult{
		Id: key.ID,
		Status: "created",
	}, nil
}

// Find - Find a pix key
func (p *PixGrpcService) Find(ctx context.Context, in *pb.PixKey) (*pb.PixKeyInfo, error) {
	pixKey, err := p.PixUseCase.FindKey(in.Key, in.Kind)
	if err != nil {
		return &pb.PixKeyInfo{}, err
	}

	return &pb.PixKeyInfo{
		Id:        pixKey.ID,
		Kind:      pixKey.Kind,
		Key:       pixKey.Key,
		Account:   &pb.Account{
			AccountId:     pixKey.AccountID,
			AccountNumber: pixKey.Account.Number,
			BankId:        pixKey.Account.BankID,
			BankName:      pixKey.Account.Bank.Name,
			OwnerName:     pixKey.Account.OwnerName,
			CreatedAt:     pixKey.Account.CreatedAt.String(),
		},
		CreatedAt: pixKey.CreatedAt.String(),
	}, nil
}

// NewPixGrpcService - new pix grpc service
func NewPixGrpcService(usecase usecase.PixUseCase) *PixGrpcService {
	return &PixGrpcService{
		PixUseCase: usecase,
	}
}