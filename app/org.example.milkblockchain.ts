import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.milkblockchain{
   export abstract class Entity extends Participant {
      entityId: string;
      name: string;
   }
   export class SysAdmin extends Entity {
   }
   export class Manufacturer extends Entity {
      cashInAccount: number;
   }
   export class Distributor extends Entity {
      cashInAccount: number;
      region: string;
   }
   export class Retailer extends Entity {
      cashInAccount: number;
      region: string;
   }
   export class Milk extends Asset {
      serialNo: string;
      dateOfManufacture: Date;
      dateOfExpiry: Date;
      batch: Batch;
   }
   export class Batch extends Asset {
      batchNo: string;
      dist: Distributor;
   }
   export class Order extends Asset {
      orderId: string;
      quantity: number;
      orderStatus: OrderStatus;
      value: number;
      placedBy: Retailer;
      takenBy: Distributor;
   }
   export abstract class CreateParticipant extends Transaction {
   }
   export class CreateManufacturer extends CreateParticipant {
   }
   export class CreateDistributor extends CreateParticipant {
   }
   export class CreateRetailer extends CreateParticipant {
   }
   export class CreateMilk extends Transaction {
   }
   export class CreateBatch extends Transaction {
   }
   export class CreateOrder extends Transaction {
      quantity: number;
      retailer: Retailer;
   }
   export class Sell extends Transaction {
      saleAmount: number;
      batch: Batch;
      distributor: Distributor;
      retailer: Manufacturer;
   }
   export class Deliver extends Transaction {
      saleAmount: number;
      order: Order;
   }
   export enum OrderStatus {
      PLACED,
      DELIVERED,
   }
   export enum SoldFlag {
      SOLD,
      STOCKED,
   }
// }
