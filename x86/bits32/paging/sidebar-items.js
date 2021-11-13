initSidebarItems({"constant":[["BASE_PAGE_SHIFT","Log2 of base page size (12 bits)."],["BASE_PAGE_SIZE","Size of a base page (4 KiB)"],["CACHE_LINE_SIZE","Size of a cache-line"],["LARGE_PAGE_SIZE","Size of a large page (4 MiB)"],["PAGE_SIZE_ENTRIES","Page tables have 512 = 4096 / 32 entries."]],"fn":[["pd_index","Given virtual address calculate corresponding entry in PD."],["pt_index","Given virtual address calculate corresponding entry in PT."]],"struct":[["IOAddr","A wrapper for an IO address (IOVA / DMA Address for devices)"],["LargePage","A type wrapping a large page with a 4 MiB buffer."],["PAddr","A wrapper for a physical address."],["PDEntry","A PD Entry consists of an address and a bunch of flags."],["PDFlags","PD configuration bits description."],["PTEntry","A PT Entry consists of an address and a bunch of flags."],["PTFlags","PT Entry bits description."],["Page","A type wrapping a base page with a 4 KiB buffer."],["VAddr","A wrapper for a virtual address."]],"type":[["PD","A page directory."],["PT","A page table."]]});