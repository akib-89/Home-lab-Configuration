# Pi-hole with Unbound Docker Configuration

This directory contains the Docker configuration for the Pi-hole along with Unbound service. Pihole is a network-wide ad blocker that blocks ads for all devices on your network by acting as a DNS sinkhole. Unbound is a validating, recursive, and caching DNS resolver that helps improve privacy and security by encrypting DNS queries.



## Docker Compose Configuration

The `docker-compose.yml` file contains the Docker Compose configuration for the Pi-hole service. Here's a brief explanation of the key parts:

- `version`: Specifies the version of Docker Compose file format.
- `services`: Defines the services that make up your app. This configuration includes two services: [`pihole`](https://pi-hole.net/) and [`unbound`](https://nlnetlabs.nl/projects/unbound).
- **Pi-Hole**: This is the main service for the Pi-hole ad blocking functionality.
- `container_name`: Specifies a custom name for the container rather than a generated default name.
- `image`: The Docker image to use for the container. In this case, we are using the official Pi-hole image along with `mvance/unbound` image for Unbound service as thre is no official image for Unbound.
- `restart`: The restart policy for the container.
- `depends_on`: Express dependency between services. In our case `unbound` service should be started before `pihole` service, because of this dependency `pihole` service will wait until `unbound` service is up and running.
- `ports`: Exposes the container's ports to the host. In this case, we are exposing port `53` for DNS and. Though Pi-hole also has a DHCP server, we are not exposing the DHCP port in this configuration. the port `53` is exposed to the host machine as we will be using this service as a DNS server. port `8080` is exposed to access the Pi-hole web interface(Admin Console).
- `volumes`: Mounts host paths or named volumes. only the `pihole` service has a volume mounted to store the configuration and data persistently.
- `environment`: Add environment variables. You can use either a list or a dictionary.
- `networks`: Networks to join, referencing entries under the top-level `networks` key.

## How to Run the Service

To get the Pi-hole service up and running, you need to have Docker and Docker Compose installed on your machine. Once you have those installed, navigate to the `pihole` directory and create a `.env` file with the following environment variables:

```plaintext
TZ=America/New_York
WEBPASSWORD=admin
```

Then, run the following command to start the Pi-hole service:

```bash
docker-compose up -d
```

This command will start the Pi-hole service in the background. You can access the Pi-hole web interface by visiting `http://localhost:8080/admin` in your browser. The default password is `admin`.

## How to Stop the Service

To stop the Pi-hole service, run the following command:

```bash
docker-compose down
```

This command will stop and remove the Pi-hole service along with the Unbound service.

## Configuration

The Pi-hole service can be configured using the web interface. You can access the web interface by visiting `http://localhost:8080/admin` in your browser. The password is the one you set in the `.env` file.

## References

- [Pi-hole](https://pi-hole.net/)
- [Unbound](https://nlnetlabs.nl/projects/unbound)
- [Installing Pi-hole with Docker](https://github.com/akib-89/Notes/blob/main/pihole/install-pihole.md)

