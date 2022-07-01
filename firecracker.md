# How to run RustyHermit in Firecracker

 1. Get the Firecracker binaries: Follow the Getting-Started guide at https://github.com/firecracker-microvm/firecracker/blob/main/docs/getting-started.md and download the binary or built Firecracker from source (building from source is quite easy using their dev container, so I would recommend this)
 2. Built the RustyHermit loader (`cargo xtask build --arch x86_64`) and any RustyHermit example application, e. g. for httpd:
    ```
    cargo build -Zbuild-std=core,alloc,std,panic_abort -Zbuild-std-features=compiler-builtins-mem --target x86_64-unknown-hermit --no-default-features --features tcp -p httpd
    ```
3. Write a JSON config file for Firecracker. Example:
    ```
    {
        "boot-source": {
            "kernel_image_path": "<path/to/rusty/loader>",
            "boot_args": "-ip 172.16.0.2 -gateway 172.16.0.1 -mask 255.255.255.0",
            "initrd_path": "<path/to/application>"
        },
        "drives": [],
        "machine-config": {
            "vcpu_count": 2,
            "mem_size_mib": 1024,
            "smt": false,
            "track_dirty_pages": false
        },
        "network-interfaces": [
            {
            "iface_id": "eth0",
            "guest_mac": "AA:FC:00:00:00:01",
            "host_dev_name": "tap0"
            }
        ]
    }
    ```
4. If the `network-interfaces` section is included in the config, the tap interface has to be set up like described in https://github.com/firecracker-microvm/firecracker/blob/main/docs/network-setup.md. The IP, Gateway and Mask arguments in the config are adapted to match the address configured for the tap interface on the host.
5. Run Firecracker using the command
    ```
    rm -f /tmp/firecracker.socket && <path/to/firecracker/binary> --api-sock /tmp/firecracker.socket --config-file <path/to/config.json>
    ```