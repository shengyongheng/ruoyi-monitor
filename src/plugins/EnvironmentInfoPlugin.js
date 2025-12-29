// 环境监控插件
import { genRandomUUID } from "@common/utils/randomUUID";
export class EnvironmentInfoPlugin {
    name = 'environment';
    sdk = null

    install(sdk) {
        this.sdk = sdk
        // 浏览器环境
        this.detectBrowserInfo();
        // 检测操作系统
        this.detectOSInfo()
        // 检测设备类型
        this.detectDeviceInfo()
        // 获取地理位置
        this.getGeolocationInfo()
    }

    // 
    uninstall() {
    }

    detectBrowserInfo() {
        const ua = navigator.userAgent;
        let browserName = "未知";
        let browserVersion = "未知";
        let engine = "未知";

        // 检测浏览器
        if (ua.includes("Chrome") && !ua.includes("Edg")) {
            browserName = "Chrome";
            const match = ua.match(/Chrome\/([0-9.]+)/);
            browserVersion = match ? match[1] : "未知";
        } else if (ua.includes("Firefox")) {
            browserName = "Firefox";
            const match = ua.match(/Firefox\/([0-9.]+)/);
            browserVersion = match ? match[1] : "未知";
        } else if (ua.includes("Safari") && !ua.includes("Chrome")) {
            browserName = "Safari";
            const match = ua.match(/Version\/([0-9.]+)/);
            browserVersion = match ? match[1] : "未知";
        } else if (ua.includes("Edg")) {
            browserName = "Edge";
            const match = ua.match(/Edg\/([0-9.]+)/);
            browserVersion = match ? match[1] : "未知";
        }

        // 检测引擎
        if (ua.includes("AppleWebKit")) {
            engine = "WebKit";
        } else if (ua.includes("Gecko")) {
            engine = "Gecko";
        } else if (ua.includes("Trident")) {
            engine = "Trident";
        }

        this.sdk.capture(this.name, {
            type: "browser",
            id: genRandomUUID(),
            name: browserName,
            version: browserVersion,
            engine: engine,
        })
    }

    detectOSInfo() {
        const ua = navigator.userAgent;
        let os = "未知";

        if (ua.includes("Windows")) {
            os = "Windows";
            if (ua.includes("Windows NT 10.0")) os = "Windows 10/11";
            else if (ua.includes("Windows NT 6.3")) os = "Windows 8.1";
            else if (ua.includes("Windows NT 6.2")) os = "Windows 8";
            else if (ua.includes("Windows NT 6.1")) os = "Windows 7";
        } else if (ua.includes("Mac")) {
            os = "macOS";
        } else if (ua.includes("Linux")) {
            os = "Linux";
        } else if (ua.includes("Android")) {
            os = "Android";
        } else if (
            ua.includes("iOS") ||
            ua.includes("iPhone") ||
            ua.includes("iPad")
        ) {
            os = "iOS";
        }
        this.sdk.capture(this.name, {
            id: genRandomUUID(),
            type: "os",
            os
        })
    }

    detectDeviceInfo() {
        const ua = navigator.userAgent;
        const width = window.innerWidth;
        let device = "";

        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            device = "平板";
        } else if (
            /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua
            )
        ) {
            device = "手机";
        } else if (width < 768) {
            device = "手机 (基于屏幕大小)";
        } else if (width < 834) {
            device = "平板 (基于屏幕大小)";
        } else {
            device = "桌面";
        }
        this.sdk.capture(this.name, {
            id: genRandomUUID(),
            type: "device",
            device
        })
    }

    getGeolocationInfo() {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude, accuracy } = position.coords;

                // 在实际应用中，这里会调用地理编码服务将坐标转换为地址
                const { country, city } = await this.getLocationFromCoords(latitude, longitude);
                this.sdk.capture(this.name, {
                    type: "geolocation",
                    id: genRandomUUID(),
                    coordinates: {
                        latitude,
                        longitude,
                        accuracy,
                    },
                    country,
                    city,
                    description: "获取地理位置成功"
                })
            },
            (error) => {
                let errorMessage = "未知错误";
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = "用户拒绝提供地理位置权限";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = "无法获取当前位置信息";
                        break;
                    case error.TIMEOUT:
                        errorMessage = "获取位置信息超时";
                        break;
                }

                this.sdk.capture(this.name, {
                    type: "geolocation",
                    id: genRandomUUID(),
                    description: errorMessage
                })
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000,
            }
        );
    }

    // 根据坐标获取位置信息（模拟）
    getLocationFromCoords(latitude, longitude) {
        // 在实际应用中，这里会调用地理编码API
        // 这里我们使用模拟数据
        return new Promise(() => {
            // this.environmentData.geolocation.country = "中国";
            // this.environmentData.geolocation.city = "北京";

            // document.getElementById("country").textContent = "中国";
            // document.getElementById("city").textContent = "北京";

            // this.logEvent("GEOLOCATION", "位置信息解析完成: 中国, 北京");
            return {
                country: "中国",
                city: "北京"
            }
        })

    }

}