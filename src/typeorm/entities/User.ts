import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: true })
    OwnerFullName: string;
  
    @Column({ nullable: true })
    RenterFullName: string;
  
    @Column({ nullable: true })
    OwnerCarBrand: string;
  
    @Column({ nullable: true })
    OwnerCarYear: number;
  
    @Column({ nullable: true })
    OwnerLicensePlate: string;
  
    @Column({ nullable: true })
    OwnerTechPassportNumber: string;
  
    @Column({ nullable: true })
    OwnerBodyNumber: string;
  
    @Column({ nullable: true })
    OwnerCarColor: string;
  
    @Column({ nullable: true })
    OwnerPhoneNumber: string;
  
    @Column({ nullable: true })
    OwnerAddress: string;
  
    @Column({ nullable: true })
    RenterCarBrand: string;
  
    @Column({ nullable: true })
    RenterCarYear: number;
  
    @Column({ nullable: true })
    RenterLicensePlate: string;
  
    @Column({ nullable: true })
    RenterTechPassportNumber: string;
  
    @Column({ nullable: true })
    RenterBodyNumber: string;
  
    @Column({ nullable: true })
    RenterCarColor: string;
  
    @Column({ nullable: true })
    RenterPhoneNumber: string;
  
    @Column({ nullable: true })
    RenterAddress: string;
  
  }