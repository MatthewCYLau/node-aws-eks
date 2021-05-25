# Node App on Amazon EKS

A reference project to deploy a Node Express app onto Amazon EKS

## Pre-requisite

- You have installed [minikube](https://minikube.sigs.k8s.io/docs/start/), [skaffold](https://skaffold.dev/docs/install/), [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/), and [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html)

## Local Development

```bash
skaffold init # initialises Skaffold
skaffold dev # runs Skaffold
```

- In a seperate terminal, run the following:

```bash
minikube start # starts minikube
minikube ip # prints minikube IP address
kubectl get services --field-selector metadata.name=k8-skaffold-srv # get the k8-skaffold-srvservice. Note down port number i.e. 3xxxx
```

- Then, visit `<minikube_ip>:<port>/ping`

## Deploy to Amazon EKS

- Install the [eksctl](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html) CLI tool
- Create an AWS EKS cluster:

```bash
eksctl create cluster \
--name <CLUSTER-NAME> \
--version 1,17 \
--region <REGION> \
--nodegroup-name <NODE-GROUP-NAME> \
--node-type t2.micro \
--nodes 2
```

- Apply the Kubernetes manifests `.yaml` files:

```bash
kubectl apply -f infra/k8s/
kubectl get service # find EXTERNAL-IP
```

- Then, visit app at `<EXTERNAL-IP>/ping`

- Note, to view nodes as AWS root user, add root user to `aws-auth` ConfigMap. See documentations [here](https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html)
