# SWEProject
SWE Project with Brian Guo, Nilesh Mukherji, Winston Yang for CS-4513

Our project aims to create a virtual ID system to aid in the deployment of universal ID efforts in developing nations.

We are looking at a data model that preserves the integrety and verifiability of data on a blockchain, while drastically reducing the computational load required.

Our aim is to create a system in which data is stored in pairs of DBs. Allow transactions to be verified for write by server X. 

Transaction 1: This data would be written to DB A

Transaction 2: This data would be written to DB B

At this point, the SHA Hash Value (with salt) of the values in DB A are added to DB B. The SHA Hash Value (with salt) of DB B are added to DB A

In this model, let n=f=2, where n is the number of DBs and f is the frequency of hashing.

As the volume of data grows, it may become impractical to maintain two massive DB's with RW permissions. Thus, we can allow n to grow by incriments of 2, allowing us to maintain our DB pair security model. Querys can be performed across a data network. 

To reduce data storage costs, f can be increased. However, the lower the value of f is, the stronger the generated chains are. 

One major presumption of this model is that the central write server is secure and writes are valid. Using modern trasaction hashing models (i.e. RSA key pair encryption), one can be reasonably sure of the later. The former could be enforced through strict security policy.

This model for data integrity could have many implications across industries including healthcare, finance and logistics. However, Universal ID is an obvious use case because such a model would create in essence a verifiably tamper proof system. This could be a huge step in preventing corruption and streamlining aid delivery in developing nations. 


