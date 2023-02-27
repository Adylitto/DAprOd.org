import{aP as p,Q as d,R as e,V as m,aW as u,Y as g,Z as C,$ as w,aX as f,a3 as v,a4 as A,a1 as W,a5 as T,aU as y,aY as b,aZ as E,a6 as R,a9 as S,a8 as k,al as h,aa as N,A as U}from"./thirdweb-checkout-2c8d478b.esm-fd2cca9d.js";import{B as o}from"./ethers-d38fee93.js";class c extends p{constructor(t,a,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new d(t,a,s,n);super(l,r,i),e(this,"abi",void 0),e(this,"encoder",void 0),e(this,"estimator",void 0),e(this,"metadata",void 0),e(this,"sales",void 0),e(this,"platformFees",void 0),e(this,"events",void 0),e(this,"roles",void 0),e(this,"interceptor",void 0),e(this,"royalties",void 0),e(this,"claimConditions",void 0),e(this,"revealer",void 0),e(this,"checkout",void 0),e(this,"erc721",void 0),e(this,"owner",void 0),this.abi=s,this.metadata=new m(this.contractWrapper,u,this.storage),this.roles=new g(this.contractWrapper,c.contractRoles),this.royalties=new C(this.contractWrapper,this.metadata),this.sales=new w(this.contractWrapper),this.claimConditions=new f(this.contractWrapper,this.metadata,this.storage),this.encoder=new v(this.contractWrapper),this.estimator=new A(this.contractWrapper),this.events=new W(this.contractWrapper),this.platformFees=new T(this.contractWrapper),this.erc721=new y(this.contractWrapper,this.storage,i),this.revealer=new b(this.contractWrapper,this.storage,E.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new R(this.contractWrapper),this.owner=new S(this.contractWrapper),this.checkout=new k(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),a=await this.totalUnclaimedSupply();return t.add(a)}async getAllClaimed(t){const a=o.from((t==null?void 0:t.start)||0).toNumber(),r=o.from((t==null?void 0:t.count)||h).toNumber(),n=Math.min((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),a+r);return await Promise.all(Array.from(Array(n).keys()).map(s=>this.get(s.toString())))}async getAllUnclaimed(t){const a=o.from((t==null?void 0:t.start)||0).toNumber(),r=o.from((t==null?void 0:t.count)||h).toNumber(),n=o.from(Math.max((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),a)),s=o.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),n.toNumber()+r));return await Promise.all(Array.from(Array(s.sub(n).toNumber()).keys()).map(i=>this.erc721.getTokenMetadata(n.add(i).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(N("transfer"),U)}async createBatch(t,a){return this.erc721.lazyMint(t,a)}async getClaimTransaction(t,a){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.getClaimTransaction(t,a,{checkERC20Allowance:r})}async claimTo(t,a){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.claimTo(t,a,{checkERC20Allowance:r})}async claim(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return this.claimTo(await this.contractWrapper.getSignerAddress(),t,a)}async burn(t){return this.erc721.burn(t)}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,a){return this.erc721.isApproved(t,a)}async transfer(t,a){return this.erc721.transfer(t,a)}async setApprovalForAll(t,a){return this.erc721.setApprovalForAll(t,a)}async setApprovalForToken(t,a){return{receipt:await this.contractWrapper.sendTransaction("approve",[t,a])}}async call(t){for(var a=arguments.length,r=new Array(a>1?a-1:0),n=1;n<a;n++)r[n-1]=arguments[n];return this.contractWrapper.call(t,...r)}}e(c,"contractRoles",["admin","minter","transfer"]);export{c as NFTDrop};
