/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { MilkComponent } from './Milk/Milk.component';
import { BatchComponent } from './Batch/Batch.component';
import { OrderComponent } from './Order/Order.component';

import { SysAdminComponent } from './SysAdmin/SysAdmin.component';
import { ManufacturerComponent } from './Manufacturer/Manufacturer.component';
import { DistributorComponent } from './Distributor/Distributor.component';
import { RetailerComponent } from './Retailer/Retailer.component';

import { CreateManufacturerComponent } from './CreateManufacturer/CreateManufacturer.component';
import { CreateDistributorComponent } from './CreateDistributor/CreateDistributor.component';
import { CreateRetailerComponent } from './CreateRetailer/CreateRetailer.component';
import { CreateMilkComponent } from './CreateMilk/CreateMilk.component';
import { CreateBatchComponent } from './CreateBatch/CreateBatch.component';
import { CreateOrderComponent } from './CreateOrder/CreateOrder.component';
import { SellComponent } from './Sell/Sell.component';
import { DeliverComponent } from './Deliver/Deliver.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Milk', component: MilkComponent },
  { path: 'Batch', component: BatchComponent },
  { path: 'Order', component: OrderComponent },
  { path: 'SysAdmin', component: SysAdminComponent },
  { path: 'Manufacturer', component: ManufacturerComponent },
  { path: 'Distributor', component: DistributorComponent },
  { path: 'Retailer', component: RetailerComponent },
  { path: 'CreateManufacturer', component: CreateManufacturerComponent },
  { path: 'CreateDistributor', component: CreateDistributorComponent },
  { path: 'CreateRetailer', component: CreateRetailerComponent },
  { path: 'CreateMilk', component: CreateMilkComponent },
  { path: 'CreateBatch', component: CreateBatchComponent },
  { path: 'CreateOrder', component: CreateOrderComponent },
  { path: 'Sell', component: SellComponent },
  { path: 'Deliver', component: DeliverComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
