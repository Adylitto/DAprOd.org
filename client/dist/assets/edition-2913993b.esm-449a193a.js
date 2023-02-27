import{P as h,Q as d,R as a,V as p,ab as l,Y as u,Z as m,$ as g,a3 as y,a4 as w,a1 as v,a5 as C,a6 as W,ac as f,a7 as T,a9 as A,aa as S,A as R}from"./thirdweb-checkout-2c8d478b.esm-fd2cca9d.js";import"./ethers-d38fee93.js";class s extends h{constructor(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new d(t,r,i,n);super(c,e,o),a(this,"abi",void 0),a(this,"metadata",void 0),a(this,"roles",void 0),a(this,"sales",void 0),a(this,"platformFees",void 0),a(this,"encoder",void 0),a(this,"estimator",void 0),a(this,"events",void 0),a(this,"royalties",void 0),a(this,"signature",void 0),a(this,"interceptor",void 0),a(this,"erc1155",void 0),a(this,"owner",void 0),this.abi=i,this.metadata=new p(this.contractWrapper,l,this.storage),this.roles=new u(this.contractWrapper,s.contractRoles),this.royalties=new m(this.contractWrapper,this.metadata),this.sales=new g(this.contractWrapper),this.encoder=new y(this.contractWrapper),this.estimator=new w(this.contractWrapper),this.events=new v(this.contractWrapper),this.platformFees=new C(this.contractWrapper),this.interceptor=new W(this.contractWrapper),this.signature=new f(this.contractWrapper,this.storage,this.roles),this.erc1155=new T(this.contractWrapper,this.storage,o),this.owner=new A(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(S("transfer"),R)}async mint(t){return this.erc1155.mint(t)}async mintTo(t,r){return this.erc1155.mintTo(t,r)}async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}async mintAdditionalSupply(t,r){return this.erc1155.mintAdditionalSupply(t,r)}async mintAdditionalSupplyTo(t,r,e){return this.erc1155.mintAdditionalSupplyTo(t,r,e)}async mintBatch(t){return this.erc1155.mintBatch(t)}async mintBatchTo(t,r){return this.erc1155.mintBatchTo(t,r)}async burn(t,r){return this.erc1155.burn(t,r)}async call(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];return this.contractWrapper.call(t,...e)}}a(s,"contractRoles",["admin","minter","transfer"]);export{s as Edition};
