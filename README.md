# Kubernetes Skaffold

A reference project to build a Kubernetes application with [Skaffold](https://skaffold.dev/)

A simple Node Express server

## Usage

```bash
skaffold init # initialises Skaffold
skaffold dev # runs Skaffold
```

In a seperate terminal, run the following:

```bash
minikube start # starts minikube
minikube ip # prints minikube IP address
kubectl get services --field-selector metadata.name=k8-skaffold-srv # get the k8-skaffold-srvservice. Note down port number i.e. 3xxxx
```

Then, visit `<minikube_ip>:<port>/ping`

## AWS EKS Deployment

- Install the [eksctl](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html) CLI tool
- Create an AWS EKS cluster:

```bash
eksctl create cluster \
--name test-cluster \
--version 1,17 \
--region us-east-1 \
--nodegroup-name linux-nodes \
--node-type t2.micro \
--nodes 2
```

- Apply config yamls:

```bash
kubectl apply -f infra/k8s/
```

- To view nodes as AWS root user, add root user to `aws-auth` ConfigMap. See documentations [here](https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html)
