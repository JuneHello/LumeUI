import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from 'LumeUI';
import { getInitials } from 'LumeUI';

/**
 * Avatar 组件示例
 */
export default function AvatarDemo() {
  const [loadingStatus, setLoadingStatus] = useState<string>('未加载');

  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <h1>Avatar 组件示例</h1>

      {/* 基础用法 */}
      <section style={{ marginBottom: '32px' }}>
        <h2>基础用法</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="用户1" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="用户2" />
            <AvatarFallback>用户2</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback>张三</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* 不同尺寸 */}
      <section style={{ marginBottom: '32px' }}>
        <h2>不同尺寸</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar size="small">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="小尺寸" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>

          <Avatar size="medium">
            <AvatarImage src="https://i.pravatar.cc/150?img=4" alt="中等尺寸" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>

          <Avatar size="large">
            <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="大尺寸" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>

          <Avatar size="xlarge">
            <AvatarImage src="https://i.pravatar.cc/150?img=6" alt="超大尺寸" />
            <AvatarFallback>XL</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* 加载失败回退 */}
      <section style={{ marginBottom: '32px' }}>
        <h2>图片加载失败回退</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar>
            <AvatarImage src="invalid-url.jpg" alt="加载失败" />
            <AvatarFallback>失败</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback>{getInitials('John Doe')}</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback>{getInitials('张三')}</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Avatar.Group */}
      <section style={{ marginBottom: '32px' }}>
        <h2>Avatar.Group（头像组）</h2>

        <div style={{ marginBottom: '16px' }}>
          <h3>默认间距</h3>
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="用户11" />
              <AvatarFallback>U11</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="用户12" />
              <AvatarFallback>U12</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=13" alt="用户13" />
              <AvatarFallback>U13</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>更多</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>限制显示数量（max=3）</h3>
          <AvatarGroup max={3}>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=21" alt="用户21" />
              <AvatarFallback>U21</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=22" alt="用户22" />
              <AvatarFallback>U22</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=23" alt="用户23" />
              <AvatarFallback>U23</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=24" alt="用户24" />
              <AvatarFallback>U24</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=25" alt="用户25" />
              <AvatarFallback>U25</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>自定义间距（spacing="-16px"）</h3>
          <AvatarGroup spacing={-16}>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=31" alt="用户31" />
              <AvatarFallback>U31</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="用户32" />
              <AvatarFallback>U32</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=33" alt="用户33" />
              <AvatarFallback>U33</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </div>
      </section>

      {/* 加载状态回调 */}
      <section style={{ marginBottom: '32px' }}>
        <h2>加载状态回调</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar>
            <AvatarImage
              src="https://i.pravatar.cc/150?img=41"
              alt="加载状态"
              onLoadingStatusChange={(status) => {
                setLoadingStatus(status);
                console.log('加载状态:', status);
              }}
            />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <span>当前状态: {loadingStatus}</span>
        </div>
      </section>

      {/* 首字母工具函数 */}
      <section style={{ marginBottom: '32px' }}>
        <h2>首字母工具函数</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar>
            <AvatarFallback>{getInitials('John Doe')}</AvatarFallback>
          </Avatar>
          <span>John Doe → {getInitials('John Doe')}</span>

          <Avatar>
            <AvatarFallback>{getInitials('张三')}</AvatarFallback>
          </Avatar>
          <span>张三 → {getInitials('张三')}</span>

          <Avatar>
            <AvatarFallback>{getInitials('Alice')}</AvatarFallback>
          </Avatar>
          <span>Alice → {getInitials('Alice')}</span>
        </div>
      </section>

      {/* 延迟显示回退 */}
      <section style={{ marginBottom: '32px' }}>
        <h2>延迟显示回退（delayMs=600ms）</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=51" alt="延迟回退" />
            <AvatarFallback delayMs={600}>延迟</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </div>
  );
}
