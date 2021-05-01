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
