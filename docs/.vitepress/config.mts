import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RuyiSDK documentation",
  description: "RuyiSDK documentation",
  lastUpdated: true,
  base: '/RuyiSDK-test/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档', link: '/introduction/index' }
    ],
    sidebar: [
      { text: '介绍', link: '/introduction/index' },
      {
        text: '工具',
        link: '/tools/index',
        items: [
          { text: 'ruyibuild', link: '/tools/ruyibuild' },
          { text: 'ruyishell', link: '/tools/ruyishell' }
        ]
      },
      {
        text: 'RuyiSDK',
        items: [
          {
            text: 'GCC',
            collapsed: true,
            items: [
              {
                text: 'RISC-V的标准gcc工具链rv64gc',
                collapsed: true,
                items: [
                  { text: '通用riscv64gc的构建和使用', link: '/sdk/gcc13-rv64gc/rv64gc_compile_and_use' },
                  { text: '使用ruyibuild构建', link: '/sdk/gcc13-rv64gc/rv64gc_ruyibuild' },
                  { text: '使用ruyishell下载测试', link: '/sdk/gcc13-rv64gc/rv64gc_ruyishell' },
                ]
              },
              {
                text: 'RISC-V的支持B(位操作)扩展的gcc工具链rv64gcb',
                link: '/sdk/gcc13-rv64gcb/index',
                collapsed: true,
                items: [
                  { text: '支持Bitmanip扩展构建和使用', link: '/sdk/gcc13-rv64gcb/rv64gcb_compile_and_use' },
                  { text: '使用ruyibuild构建', link: '/sdk/gcc13-rv64gcb/rv64gcb_ruyibuild' },
                  { text: '使用ruyishell下载测试', link: '/sdk/gcc13-rv64gcb/rv64gcb_ruyishell' },
                ]
              },
              {
                text: 'RISC-V的支持K（密码学-标量）扩展的gcc工具链rv64gck',
                link: '/sdk/gcc13-rv64gck/index',
                collapsed: true,
                items: [
                  { text: '支持Scalar Crypto扩展的构建和使用', link: '/sdk/gcc13-rv64gck/rv64gck_compile_and_use' },
                  { text: '使用ruyibuild构建', link: '/sdk/gcc13-rv64gck/rv64gck_ruyibuild' },
                  { text: '使用ruyishell下载测试', link: '/sdk/gcc13-rv64gck/rv64gck_ruyishell' },
                ]
              },
              {
                text: 'RISC-V的支持V扩展的gcc工具链rv64gcv',
                link: '/sdk/gcc13-rv64gcv/index',
                collapsed: true,
                items: [
                  { text: '支持RVV1.0扩展的构建和使用', link: '/sdk/gcc13-rv64gcv/rv64gcv_compile_and_use' },
                  { text: '使用ruyibuild构建', link: '/sdk/gcc13-rv64gcv/rv64gcv_ruyibuild' },
                  { text: '使用ruyishell下载测试', link: '/sdk/gcc13-rv64gcv/rv64gcv_ruyishell' },
                ]
              },
              {
                text: 'RISC-V的支持ZC扩展的gcc工具链rv64gzc',
                link: '/sdk/gcc13-rv64gzc/index',
                collapsed: true,
                items: [
                  { text: '支持ZC扩展构建和使用', link: '/sdk/gcc13-rv64gzc/rv64gzc_compile_and_use' },
                  { text: '使用ruyibuild构建', link: '/sdk/gcc13-rv64gzc/rv64gzc_ruyibuild' },
                  { text: '使用ruyishell下载测试', link: '/sdk/gcc13-rv64gzc/rv64gzc_ruyishell' },
                ]
              },
              {
                text: 'RISC-V的支持Zfinx扩展的gcc工具链rv32izfinx',
                link: '/sdk/gcc13-rv32izfinx/index',
                collapsed: true,
                items: [
                  { text: '支持Zfinx扩展构建和使用', link: '/sdk/gcc13-rv32izfinx/rv32izfinx_compile_and_use' },
                  { text: '使用ruyibuild构建', link: '/sdk/gcc13-rv32izfinx/rv32izfinx_ruyibuild' },
                  { text: '使用ruyishell下载测试', link: '/sdk/gcc13-rv32izfinx/rv32izfinx_ruyishell' },
                ]
              },
              {
                text: 'RISC-V的支持P扩展的gcc工具链rv64gcp',
                link: '/sdk/gcc13-rv64gck/index',
                collapsed: true,
                items: [
                  { text: '支持P扩展的构建和使用', link: '/sdk/gcc13-rv64gck/rv64gck_compile_and_use' },
                  { text: '使用ruyibuild构建', link: '/sdk/gcc13-rv64gck/rv64gck_ruyibuild' },
                  { text: '使用ruyishell下载测试', link: '/sdk/gcc13-rv64gck/rv64gck_ruyishell' },
                ]
              },
              {
                text: 'RISC-V的支持V扩展(0.7.1)的gcc工具链rv64gcv',
                link: '/sdk/gcc13-rv64gcv/index',
                collapsed: true,
                items: [
                  { text: '支持RVV(0.7.1)扩展的构建和使用', link: '/sdk/gcc13-rv64gcv/rv64gcv_compile_and_use' },
                  { text: '使用ruyibuild构建', link: '/sdk/gcc13-rv64gcv/rv64gcv_ruyibuild' },
                  { text: '使用ruyishell下载测试', link: '/sdk/gcc13-rv64gcv/rv64gcv_ruyishell' },
                ]
              },
              {
                text: 'RISC-V的支持玄铁自定义系列扩展xthead的gcc工具链rv64gcxthead',
                link: '/sdk/gcc10-rv64gcbpv_xthead_zfh/index',
                collapsed: true,
                items: [
                  { text: '支持xthead扩展的构建和使用', link: '/sdk/gcc10-rv64gcbpv_xthead_zfh/rv64gcbpv_xthead_zfh_compile_and_use' },
                  { text: '使用ruyibuild构建', link: '/sdk/gcc10-rv64gcbpv_xthead_zfh/rv64gcbpv_xthead_zfh_ruyibuild' },
                  { text: '使用ruyishell下载测试', link: '/sdk/gcc10-rv64gcbpv_xthead_zfh/rv64gcbpv_xthead_zfh_ruyishell' },
                ]
              }
            ]
          },
          {
            text: 'RISC-V 的 LLVM 工具链¶', link: '/sdk/llvm/index', items: [
              { text: 'LLVM的构建和使用', link: '/sdk/llvm/llvm_compile_and_use' },
              { text: '使用ruyibuild构建', link: '/sdk/llvm/llvm_ruyibuild' },
              { text: '使用ruyishell下载测试', link: '/sdk/llvm/llvm_ruyishell' },
            ]
          },
          {
            text: 'RUYI QEMU',
            link: '/sdk/qemu/index',
            items: [
              { text: 'QEMU 的构建和使用', link: '/sdk/qemu/qemu_compile_and_use' },
              { text: '使用 ruyibuild 构建', link: '/sdk/qemu/qemu_ruyibuild' },
            ]
          }
        ]
      },
      {
        text: '版本规划路线图',
        link: '/plan/index',
        items: [
        ]
      },
      {
        text: 'Benchmarks',
        link: '/benchmark/index',
        items: [
          { text: 'Coremark', link: '/benchmark/coremark' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
